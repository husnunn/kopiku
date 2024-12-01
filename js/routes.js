var routes = [
    {path: '/', componentUrl: 'pages/home.html'},
    {path: '/dashboard/', componentUrl: 'pages/dashboard.html'},
    {name:'cappucino' , path: '/detailcappucino/', componentUrl: 'pages/detailcappucino.html'},
    {name:'kota' , path: '/kota/', componentUrl: 'pages/kota.html'},
    {name:'latte' , path: '/detail/:id/', componentUrl: 'pages/detail.html'},
    {path: '/stok/:stok/', componentUrl: 'pages/stok.html'},
    {path: '/login/', componentUrl: 'pages/login.html'},
    {path: '/menulist/', componentUrl: 'pages/menulist.html'},
    {path: '/favorit/', componentUrl: 'pages/favorit.html'},
    {path: '/profil/', componentUrl: 'pages/profil.html'},
    {path: '/setting/', componentUrl: 'pages/setting.html'},
    {path: '/contact/', componentUrl: 'pages/contact.html'},
    {path: '/keranjang/', componentUrl: 'pages/keranjang.html'},
    {path: '(.*)', url: './pages/404.html'}


];
