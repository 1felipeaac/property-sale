export default function Map() {
  return (
    <div className="max-w-[50rem] p-6">
      <iframe
        className="max-w-[50rem] h-64 rounded-xl"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d989.6212734655207!2d-42.820267900175544!3d-5.102313744465105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1752633554179!5m2!1spt-BR!2sbr"
      ></iframe>
    </div>
  );
}
