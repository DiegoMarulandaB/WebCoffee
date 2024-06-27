import React from 'react';
import ClientButton from '@/components/PrivacyPolicy/PrivacyButton';

const PrivacyPolicy: React.FC = () => {
  const privacyPolicyText = `
    Políticas de Privacidad de WebCoffee

    Última actualización: 25 de junio de 2024

    En WebCoffee, valoramos la privacidad de nuestros clientes y nos comprometemos a proteger la información personal que nos proporciona.

    1. Información que recopilamos
    Recopilamos varios tipos de información de nuestros clientes y visitantes del Sitio, que incluyen:
    - Información personal: nombre, dirección de correo electrónico, dirección de envío, número de teléfono y detalles de pago.
    - Información de la transacción: detalles de las compras realizadas, incluido el tipo de producto, la cantidad y la fecha de la compra.
    - Información técnica: dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia en el Sitio.

    2. Cómo utilizamos su información
    Utilizamos la información recopilada para los siguientes fines:
    - Procesar y completar sus pedidos, incluyendo el envío, la confirmación del pedido y la facturación.
    - Comunicarnos con usted en relación a su cuenta o transacciones, y enviarle información sobre nuestras políticas y condiciones.
    - Enviar correos electrónicos de marketing sobre nuestros productos, ofertas y eventos, si ha consentido recibir dichas comunicaciones.
    - Mejorar y personalizar su experiencia en el Sitio mediante el análisis de sus preferencias y el historial de compras.
    - Proteger la seguridad de nuestro Sitio y prevenir el fraude.

    3. Compartición de su información
    No vendemos ni alquilamos su información personal a terceros.

    4. Seguridad de la información
    Implementamos medidas de seguridad razonables para proteger la información personal que recopilamos.

    5. Sus derechos
    Usted tiene derecho a:
    - Acceder a la información personal que tenemos sobre usted.
    - Solicitar la corrección o eliminación de su información personal.
    - Oponerse al procesamiento de su información personal o solicitar la limitación de dicho procesamiento.
    - Retirar su consentimiento para el uso de su información personal en cualquier momento.

    Para ejercer estos derechos, por favor contáctenos a través de la información de contacto proporcionada a continuación.

    6. Cookies y tecnologías similares
    Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro Sitio, analizar el uso del Sitio y personalizar el contenido.

    7. Enlaces a otros sitios web
    Nuestro Sitio puede contener enlaces a otros sitios web que no son operados por nosotros.

    8. Cambios a esta Política de Privacidad
    Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en nuestras prácticas o en las leyes aplicables.

    9. Contáctenos
    Si tiene alguna pregunta sobre esta Política de Privacidad o sobre cómo manejamos su información personal, por favor contáctenos en:

    WebCoffee
    Correo electrónico: privacy@webcoffee.com
    Dirección: Av. del Café 123, Ciudad del Café, País del Café
    Teléfono: +123 456 7890

    Agradecemos su confianza en WebCoffee y estamos comprometidos a proteger su privacidad y garantizar que su experiencia con nosotros.
  `;
  return (
    <div className="mx-auto text-center sm:text-left ml-4 sm:pt-0 mr-4 sm:mr-0">
      <pre className="max-w-full sm:max-w-auto mt-5 text-lg font-normal" style={{ whiteSpace: 'pre-wrap' }}>
        {privacyPolicyText}
      </pre>
      <ClientButton />
    </div>
  );
};

export default PrivacyPolicy;
