
import React from "react";

const PrivacyPolicy: React.FC = () => {
  const privacyPolicyText = `
        Políticas de Privacidad de WebCoffee

        Última actualización: 25 de junio de 2024

        En WebCoffee, valoramos la privacidad de nuestros clientes y nos comprometemos a proteger la información personal que nos proporciona. Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos su información cuando visita o realiza una compra en nuestro sitio web www.webcoffee.com (en adelante, el "Sitio").

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
        No vendemos ni alquilamos su información personal a terceros. Sin embargo, podemos compartir su información con terceros en las siguientes circunstancias:
        - Proveedores de servicios: Trabajamos con terceros que nos ayudan a operar nuestro negocio, como procesadores de pagos, empresas de envío y proveedores de servicios de marketing. Estos proveedores de servicios tienen acceso a su información personal solo para realizar tareas específicas en nuestro nombre y están obligados a proteger su información.
        - Cumplimiento de la ley: Podemos divulgar su información personal si así lo exige la ley o si creemos de buena fe que dicha acción es necesaria para cumplir con una obligación legal, proteger nuestros derechos, investigar fraudes o responder a una solicitud gubernamental.

        4. Seguridad de la información
        Implementamos medidas de seguridad razonables para proteger la información personal que recopilamos. Sin embargo, ningún método de transmisión por Internet o de almacenamiento electrónico es completamente seguro, por lo que no podemos garantizar la seguridad absoluta de su información.

        5. Sus derechos
        Usted tiene derecho a:
        - Acceder a la información personal que tenemos sobre usted.
        - Solicitar la corrección o eliminación de su información personal.
        - Oponerse al procesamiento de su información personal o solicitar la limitación de dicho procesamiento.
        - Retirar su consentimiento para el uso de su información personal en cualquier momento.

        Para ejercer estos derechos, por favor contáctenos a través de la información de contacto proporcionada a continuación.

        6. Cookies y tecnologías similares
        Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro Sitio, analizar el uso del Sitio y personalizar el contenido y los anuncios. Puede configurar su navegador para rechazar las cookies o para que le notifique cuando se envíen cookies. Sin embargo, si desactiva las cookies, es posible que algunas partes de nuestro Sitio no funcionen correctamente.

        7. Enlaces a otros sitios web
        Nuestro Sitio puede contener enlaces a otros sitios web que no son operados por nosotros. No somos responsables de las prácticas de privacidad de estos sitios de terceros y le recomendamos que revise las políticas de privacidad de cada sitio que visite.

        8. Cambios a esta Política de Privacidad
        Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en nuestras prácticas o en las leyes aplicables. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en nuestro Sitio y actualizando la fecha de "Última actualización" en la parte superior de esta política.

        9. Contáctenos
        Si tiene alguna pregunta sobre esta Política de Privacidad o sobre cómo manejamos su información personal, por favor contáctenos en:

        WebCoffee
        Correo electrónico: privacy@webcoffee.com
        Dirección: Av. del Café 123, Ciudad del Café, País del Café
        Teléfono: +123 456 7890

        Agradecemos su confianza en WebCoffee y estamos comprometidos a proteger su privacidad y garantizar que su experiencia con nosotros sea segura y satisfactoria.
    `;

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/PolíticasDePrivacidadDeWebCoffee.pdf";
    link.download = "PolíticasDePrivacidadDeWebCoffee.pdf";
    link.click();
  };

  return (
    <div>
      <h1>Políticas de Privacidad</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{privacyPolicyText}</pre>
      <button onClick={downloadPdf}>Descargar PDF</button>
    </div>
  );
};

export default PrivacyPolicy;
