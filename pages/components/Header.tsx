import Link from 'next/link';

export default function Header () {
  return (
    <header className='header' >
      <Link href='/'>
        <img src='/static/logo.svg' alt='' className='header_logo' />
      </Link>
      <Link href='/'>
        <h1 className='header__title'> Apparel</h1>
      </Link>
      <a className='header__summary snipacr-checkout snipcart-summary' href='#' style={{textDecoration: "none"}} >
        <span className="header__price snipcart-total-price"></span>
      </a>
    </header>
  )
}
