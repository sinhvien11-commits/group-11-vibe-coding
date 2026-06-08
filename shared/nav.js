document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();

  const nav = document.createElement('nav');
  nav.className = 'bg-amber-800 text-white px-6 py-3 flex items-center gap-6 shadow-md';
  nav.innerHTML = `
    <span class="font-bold text-lg mr-4">☕ Cà Phê S11</span>
    <a href="submit.html"
       class="text-sm font-medium transition-colors ${currentPage === 'submit.html' ? 'text-amber-200 underline' : 'hover:text-amber-200'}">
      Gửi Phản Hồi
    </a>
    <a href="admin.html"
       class="text-sm font-medium transition-colors ${currentPage === 'admin.html' ? 'text-amber-200 underline' : 'hover:text-amber-200'}">
      Admin View
    </a>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
});
