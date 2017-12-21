<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="/img/favicon.png" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <meta property="og:title" content="n3xtcon">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{url()->current()}}">
    <meta property="og:image" content="/img/Og.png">
    <meta property="og:description" content="n3xt con is a haven for creative and intellectual authenticity. We believe entrepreneurial spirit is an immutable individual trait that cannot be smothered. n3xt con’s mission is to establish an environment in which such spirit not only flourishes but inspires more people to make a long lasting impact in their lives and beyond.">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

    <App id="app"></App>
    @yield('content')

    <script>
    if (document.domain.indexOf("n3xt2017.test")!=-1){
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +':35729/livereload.js?snipver=1"></' + 'script>');
      }
    </script>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
