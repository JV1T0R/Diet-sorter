// Global Header
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="p-2 bg-dark">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">Gerador de Dietas</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="index.html">Home</a>
                            <a class="nav-link" href="calculators.html">Calculadoras de Recursos</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        `
    }
}

customElements.define('global-header', Header)

// Global Footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="d-flex justify-content-center align-items-center text-center p-3">
            <p class="text-secondary">&copy; por João Vítor Pamponet Esteves. Todos os direitos reservados.</p>
        </footer>
        `
    }
}

customElements.define('global-footer', Footer)