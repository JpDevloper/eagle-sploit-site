const translations = {
  en: {
    nav_home: "Home",
    nav_download: "Download",
    nav_contact: "Contact",
    nav_gallery: "Gallery",
    slogan: "Precision and freedom for your scripts",
    home_title: "High-Level Exploiting",
    home_text: "Eagle Sploit X is a fast and reliable Luau executor for Roblox. Clean UI, full script support, and high performance.",
    home_btn: "Download Now",
    download_title: "Secure Download",
    download_text: "Click below to download via Discord:",
    download_btn: "Join Discord",
    download_note: "⚠️ Antivirus may give false positives – this is expected.",
    contact_title: "Contact & Support",
    contact_text: "Need help or want to report a bug?",
    contact_btn: "Join Our Discord",
    gallery_title: "Gallery"
  },
  es: {
    nav_home: "Inicio",
    nav_download: "Descargar",
    nav_contact: "Contacto",
    nav_gallery: "Galería",
    slogan: "Precisión y libertad para tus scripts",
    home_title: "Explotación de alto nivel",
    home_text: "Eagle Sploit X es un ejecutor Luau rápido y confiable para Roblox. Interfaz limpia y rendimiento superior.",
    home_btn: "Descargar ahora",
    download_title: "Descarga segura",
    download_text: "Haz clic abajo para descargar desde Discord:",
    download_btn: "Unirse al Discord",
    download_note: "⚠️ El antivirus puede dar falsos positivos – es normal.",
    contact_title: "Contacto y Soporte",
    contact_text: "¿Necesitas ayuda o quieres informar un error?",
    contact_btn: "Únete a nuestro Discord",
    gallery_title: "Galería"
  },
  pt: {
    nav_home: "Início",
    nav_download: "Download",
    nav_contact: "Contato",
    nav_gallery: "Galeria",
    slogan: "Precisão e liberdade para seus scripts",
    home_title: "Exploração em alto nível",
    home_text: "Eagle Sploit X é um executor Luau rápido e confiável para Roblox. Interface limpa, suporte total e alta performance.",
    home_btn: "Baixar agora",
    download_title: "Download Seguro",
    download_text: "Clique abaixo para baixar via Discord:",
    download_btn: "Entrar no Discord",
    download_note: "⚠️ O antivírus pode acusar falso positivo – é normal.",
    contact_title: "Contato e Suporte",
    contact_text: "Precisa de ajuda ou quer reportar um bug?",
    contact_btn: "Nosso Discord",
    gallery_title: "Galeria"
  }
};

const select = document.getElementById("lang-select");

select.addEventListener("change", () => {
  const lang = select.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  // Atualiza o slogan (fora do data-i18n)
  const slogan = document.getElementById("slogan");
  if (slogan) slogan.textContent = translations[lang]["slogan"];
});
