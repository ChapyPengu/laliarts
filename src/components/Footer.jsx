
function Footer() {
  return (
    <footer className="flex flex-col px-4 py-4 bg-primary items-center justify-center gap-4">
        <div className="box">
            <a href="https://stramount.netlify.app">
                <img className="w-16 h-16" src="/stramount/logo-stramount.png" alt="Logo de Stramount"/>
            </a>
        </div>
        <div className="text-white font-normal text-center">
            <small>&copy; 2024 <b>Stramount</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
  )
}

export default Footer