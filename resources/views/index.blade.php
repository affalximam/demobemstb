<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEM STB 2024</title>
    <link rel="stylesheet" href="{{ asset('asets/bootstrap-5.3.3-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('asets/library/aos/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('asets/custom/css/style.css') }}">
</head>
<body data-scroll-index="0">

    @include('components.navbar')

    <section class="jumbotron jumbotron-home" data-scroll-index="1">
        <h1>Selamat Datang Di website Kami</h1>
        <h2>BEM STB 2024</h2>
        <h3>Kabinet Naradhipta</h3>
        <img src="{{ asset('asets/svg/Vector-1.svg') }}" class="vector">
    </section>

    <section class="sambutan-presma" data-scroll-index="2">
        <div class="row sambutan-presma-1">
            <h2>Jelajah Informasi Terbaru</h2>
        </div>
        <div class="sambutan-presma-2">
            <div class="sambutan-presma-2-1"></div>
            <div class="container">
                <div class="row">
                <div class="col-4">
                    <img src="{{ asset('asets/images/presma.webp') }}" alt="">
                </div>
                <div class="col-8">
                    <h3>Sambutan Presiden Mahasiswa</h3>
                    <p>To put it mildly, a surprising flexibility in a description of
                        the bilateral act the independent knowledge.
                    </p>
                    <a href="#" class="btn btn-lg">Selengkapnya</a>
                </div>
            </div>
        </div>
        <div class="sambutan-presma-3"></div>
    </section>

    <section class="dokumentasi-terbaru" data-scroll-index="3">
        <img src="{{ asset('asets/svg/Vector-2.svg') }}" class="vector">
        <div class="dokumentasi-terbaru-1">
            <div class="row">
                    <h2>Dokumentasi Terbaru</h2>
                </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <a href="#" class="card">
                            <img src="{{ asset('asets/images/WhatsApp Image 2024-03-10 at 10.49.13.jpeg') }}" alt="" srcset="">
                            <h3>Nama Kegiatan</h3>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <a href="#" class="card">
                            <img src="{{ asset('asets/images/WhatsApp Image 2024-03-10 at 10.49.13.jpeg') }}" alt="" srcset="">
                            <h3>Nama Kegiatan</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <img src="{{ asset('asets/svg/Vector-3.svg') }}" class="vector pt-5 mt-5">
    </section>

    @include('components.contact')
    @include('components.footer')
    @include('components.backtotop')

    <script src="{{ asset('asets/library/jquery-3.7.1.min.js') }}"></script>
    <script src="{{ asset('asets/bootstrap-5.3.3-dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('asets/library/aos/aos.js') }}"></script>
    <script src="{{ asset('asets/library/gsap/gsap.js') }}"></script>
    <script src="{{ asset('asets/library/gsap/TextPlugin.js') }}"></script>
    <script src="{{ asset('asets/library/scrollIt.js') }}"></script>
    <script src="{{ asset('asets/custom/js/script.js') }}"></script>
</body>
</html>