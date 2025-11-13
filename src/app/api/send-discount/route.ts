import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { promises as fs } from 'fs';
import path from 'path';

const MAX_DISCOUNTS = 5;
const DISCOUNT_CODE = 'PROMO10';
const TELEGRAM_LINK = 'https://t.me/+Vz4lFgy59zo5OGFk';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY no está configurada');
  }
  return new Resend(apiKey);
}

interface DiscountData {
  count: number;
  emails: string[];
}

async function getDiscountData(): Promise<DiscountData> {
  const dataPath = path.join(process.cwd(), 'data', 'discounts.json');
  
  try {
    const fileContents = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    // Si el archivo no existe, crear estructura inicial
    return { count: 0, emails: [] };
  }
}

async function saveDiscountData(data: DiscountData): Promise<void> {
  const dataDir = path.join(process.cwd(), 'data');
  const dataPath = path.join(dataDir, 'discounts.json');
  
  try {
    // Asegurar que el directorio existe
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving discount data:', error);
    throw error;
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getEmailTemplate(discountCode: string, telegramLink: string): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tu código de descuento - iatools.shop</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #111827;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #111827;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: 16px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%);">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">¡Bienvenido a iatools.shop!</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #d1d5db; font-size: 16px; line-height: 1.6;">
                Gracias por unirte a nuestra comunidad. Aquí tienes tu código de descuento exclusivo:
              </p>
              
              <!-- Discount Code Box -->
              <div style="background: linear-gradient(135deg, #ec4899 0%, #9333ea 100%); border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
                <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9;">Tu código de descuento</p>
                <p style="margin: 0; color: #ffffff; font-size: 36px; font-weight: bold; letter-spacing: 4px;">${discountCode}</p>
                <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">10% de descuento</p>
              </div>
              
              <p style="margin: 20px 0; color: #d1d5db; font-size: 16px; line-height: 1.6;">
                Usa este código al realizar tu compra para obtener un <strong style="color: #ec4899;">10% de descuento</strong> en tu suscripción.
              </p>
              
              <!-- Telegram CTA -->
              <div style="background-color: #1f2937; border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0; border: 1px solid rgba(59, 130, 246, 0.3);">
                <h2 style="margin: 0 0 15px 0; color: #ffffff; font-size: 20px; font-weight: bold;">Únete a nuestra comunidad</h2>
                <p style="margin: 0 0 20px 0; color: #9ca3af; font-size: 14px; line-height: 1.6;">
                  Conecta con otros usuarios, obtén soporte prioritario y accede a promociones exclusivas en nuestro grupo de Telegram.
                </p>
                <a href="${telegramLink}" 
                   style="display: inline-block; background-color: #3b82f6; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">
                  Unirse al grupo de Telegram
                </a>
              </div>
              
              <p style="margin: 30px 0 0 0; color: #9ca3af; font-size: 14px; line-height: 1.6; text-align: center;">
                Si tienes alguna pregunta, no dudes en contactarnos en <a href="mailto:soporte@iatools.shop" style="color: #ec4899; text-decoration: none;">soporte@iatools.shop</a>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; text-align: center; background-color: #1f2937; border-top: 1px solid rgba(255, 255, 255, 0.1);">
              <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 12px;">
                © 2024 iatools.shop. Todos los derechos reservados.
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                Este es un correo automático, por favor no respondas a este mensaje.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validar email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'Email es requerido' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: 'Email no válido' },
        { status: 400 }
      );
    }

    // Obtener datos de descuentos
    const discountData = await getDiscountData();

    // Verificar si el email ya recibió un descuento
    if (discountData.emails.includes(email.toLowerCase())) {
      return NextResponse.json(
        { message: 'Este email ya ha recibido un código de descuento' },
        { status: 400 }
      );
    }

    // Verificar límite de descuentos
    if (discountData.count >= MAX_DISCOUNTS) {
      return NextResponse.json(
        { message: 'Los descuentos se han agotado' },
        { status: 429 }
      );
    }

    // Verificar API key de Resend
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada');
      return NextResponse.json(
        { message: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    // Enviar email
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@iatools.shop';
    const resend = getResendClient();
    
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: '🎉 Tu código de descuento del 10% - iatools.shop',
      html: getEmailTemplate(DISCOUNT_CODE, TELEGRAM_LINK),
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { message: 'Error al enviar el email. Por favor, intenta nuevamente.' },
        { status: 500 }
      );
    }

    // Incrementar contador y agregar email
    discountData.count += 1;
    discountData.emails.push(email.toLowerCase());

    // Guardar datos
    await saveDiscountData(discountData);

    return NextResponse.json({
      message: 'Código de descuento enviado exitosamente',
      success: true,
    });
  } catch (error) {
    console.error('Error in send-discount route:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

