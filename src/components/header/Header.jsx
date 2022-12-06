import { Container, Nav, Navbar, Offcanvas, Stack } from 'react-bootstrap';
import Image from "next/image";
import Logo from '../../../public/static/images/logo.svg'
import Link from 'next/link';

function Header() {
  return (
    <>
      <container  style={{pading:"0"}} className="styles-header">
        {['xl'].map((expand) => (
          <Navbar key={expand} expand={expand}>
            <Container fluid>
              <div className='logo-header' >
                <Link href="/">
                  <Image style={{ cursor: 'pointer'}} src={Logo} alt="logo-header" width="337px" height="156px" />
                </Link>
              </div>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    MENU
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav id='buttons-header' className="flex-grow-1 pe-3" >
                    <Nav.Link href="/sobre-nos">Quem Somos</Nav.Link>
                    <Nav.Link href="/programa">O Programa</Nav.Link>
                    <Nav.Link href="/voluntarios">Voluntários</Nav.Link>
                    <Nav.Link href="/doacoes">Doações</Nav.Link>
                    <Nav.Link href="/parcerias">Parcerias</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </container>
    </>
  );
}

export default Header;
