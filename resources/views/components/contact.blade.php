<section class="contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="row bottom-navigation">
                    <div class="col-6 col-lg-12 bottom-navigation-1">
                        <a href="#">Home</a>
                        <a href="#">Tentang Kami </a>
                        <a href="#">Struktur Organisasi </a>
                        <a href="#">Program Kerja </a>
                    </div>
                    <div class="col-6 col-lg-12 bottom-navigation-2">
                        <a href="#">Dokumentasi </a>
                        <a href="#">Kontak </a>
                        <a href="#">Tentang Developer </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <h2>Hubungi Kami</h2>
                <div class="social-media">
                    <a href="#">
                        <img src="{{ asset('asets/svg/envelope.svg') }}">
                    </a>
                    <a href="#">
                        <img src="{{ asset('asets/svg/instagram.svg') }}">
                    </a>
                    <a href="#">
                        <img src="{{ asset('asets/svg/tiktok.svg') }}">
                    </a>
                    <a href="#">
                        <img src="{{ asset('asets/svg/youtube.svg') }}">
                    </a>
                </div>
                <p>Atau isi kotak submisi dibawah ini:</p>
                <form>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="nama">
                        <label for="floatingInput">Nama</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="nama@email.com">
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" id="floatingPassword" placeholder="pesan"></textarea>
                        <label for="floatingPassword">Pesan</label>
                    </div>
                    <button class="btn btn-lg">Kirim Pesan</button>
                </form>
            </div>
        </div>
    </div>
</section>