import './header.css';
import { createButton } from '../atoms/Button';

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const header = document.createElement('header');

  const wrapper = document.createElement('div');
  wrapper.className = 'storybook-header';

  const logo = `<div class="m-logo" data-component="m19-logo">
  <a class="" href="https://www.neom.com/en-us/careers/" style="color: rgb(255, 255, 255);">
  <img src="https://static.vscdn.net/images/careers/demo/neom-sandbox/1661783515::future-loop_logo" width="auto" height="80" class="d-inline-block align-top" alt="eightfold-logo"></a>
  </div>`;

//   <div class="m-logo" data-component="m19-logo">
//   <a href="/content/neom/en-us.html" target="_self" class="m-logo__link">
// <div class="a-image" data-component="a01-image" data-enable-transition="false">
//   <picture class="a-image__picture" data-image-wrapper="">
//       <source srcset="https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&amp;scl=1" sizes="100vw ">
//     <img class="a-image__img" data-image-img="" src="https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&amp;scl=1" alt="Neom Logo Alt" loading="lazy" fetchpriority="low">
//   </picture>
// </div>
//   </a>
// </div>

  wrapper.insertAdjacentHTML('afterbegin', logo);

  const account = document.createElement('div');
  if (user) {
    const welcomeMessage = `<span class="welcome">Welcome, <b>${user.name}</b>!</span>`;
    account.innerHTML = welcomeMessage;
    account.appendChild(createButton({ size: 'small', label: 'Log out', onClick: onLogout }));
  } else {
    account.appendChild(createButton({ size: 'small', label: 'Log in', onClick: onLogin }));
    account.appendChild(
      createButton({
        size: 'small',
        label: 'Sign up',
        onClick: onCreateAccount,
        primary: true,
      })
    );
  }
  wrapper.appendChild(account);
  header.appendChild(wrapper);

  return header;
};
