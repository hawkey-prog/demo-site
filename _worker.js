export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Если корневой путь, отдаем index.html
    if (url.pathname === '/' || url.pathname === '') {
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
    }
    
    // Иначе отдаем запрошенный файл
    return env.ASSETS.fetch(request);
  }
};
