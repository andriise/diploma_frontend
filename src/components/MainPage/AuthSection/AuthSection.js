import Goose from '../../../images/khpi_logo.png';
import { FiLogIn } from 'react-icons/fi';
import { ButtonNavigation } from '../../AuthNavigate/AuthNavigate';
import css from './AuthSection.module.css';

export const AuthSection = () => {
  return (
    <section className={css.container}>
      <img
        className={css.hero}
        src={Goose}
        alt="Logo"
        width="142px"
        height="142px"
      />

      <div className={css.nav}>
        <ButtonNavigation
          className={css.btnLogin}
          route="/login"
          btnText="Log in"
        >
          <FiLogIn size={18} />
        </ButtonNavigation>
        <ButtonNavigation
          className={css.link}
          route="/register"
          btnText="Sign up"
        />
      </div>
    </section>
  );
};
