import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container-rodape'>
        <div className='informacoes'>
          <p>Sobre nós:</p>
          <p>Razão social: LUVARD MARKETING DIGITAL LTDA</p>
          <p>CNPJ: 27.472.997/0001-39</p>
          <p>E-mail: contato@luvard.com</p>
          <div style={{ color: '#ffffff' }} className='footer-links'>
            <Link href='/termos_de_uso' passHref>
              Termos de Uso
            </Link>{' '}
            |{' '}
            <Link href='/politicas_de_privacidade' passHref>
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
