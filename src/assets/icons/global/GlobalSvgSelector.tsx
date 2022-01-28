import React from "react";

interface Props {
  id: string;
}

export function GlobalSvgSelector({ id }: Props) {
  switch (id) {
    case "logo-svg":
      return (
        <svg
          width="55"
          height="23"
          viewBox="0 0 55 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.727997 0.192001H4.472V18H0.727997V0.192001Z"
            fill="#252B42"
          />
          <path
            d="M14.1907 18.192C12.8307 18.192 11.6067 17.912 10.5187 17.352C9.44675 16.776 8.60675 15.984 7.99875 14.976C7.39075 13.968 7.08675 12.824 7.08675 11.544C7.08675 10.264 7.39075 9.12 7.99875 8.112C8.60675 7.104 9.44675 6.32 10.5187 5.76C11.6067 5.184 12.8307 4.896 14.1907 4.896C15.5507 4.896 16.7667 5.184 17.8387 5.76C18.9107 6.32 19.7507 7.104 20.3587 8.112C20.9667 9.12 21.2707 10.264 21.2707 11.544C21.2707 12.824 20.9667 13.968 20.3587 14.976C19.7507 15.984 18.9107 16.776 17.8387 17.352C16.7667 17.912 15.5507 18.192 14.1907 18.192ZM14.1907 15.12C15.1507 15.12 15.9347 14.8 16.5427 14.16C17.1667 13.504 17.4787 12.632 17.4787 11.544C17.4787 10.456 17.1667 9.592 16.5427 8.952C15.9347 8.296 15.1507 7.968 14.1907 7.968C13.2307 7.968 12.4387 8.296 11.8147 8.952C11.1907 9.592 10.8787 10.456 10.8787 11.544C10.8787 12.632 11.1907 13.504 11.8147 14.16C12.4387 14.8 13.2307 15.12 14.1907 15.12Z"
            fill="#252B42"
          />
          <path
            d="M37.1933 5.088V15.84C37.1933 18.208 36.5773 19.968 35.3453 21.12C34.1133 22.272 32.3133 22.848 29.9453 22.848C28.6973 22.848 27.5133 22.696 26.3933 22.392C25.2733 22.088 24.3453 21.648 23.6093 21.072L25.0973 18.384C25.6413 18.832 26.3293 19.184 27.1613 19.44C27.9933 19.712 28.8253 19.848 29.6573 19.848C30.9533 19.848 31.9053 19.552 32.5133 18.96C33.1373 18.384 33.4493 17.504 33.4493 16.32V15.768C32.4733 16.84 31.1133 17.376 29.3693 17.376C28.1853 17.376 27.0973 17.12 26.1053 16.608C25.1293 16.08 24.3533 15.344 23.7773 14.4C23.2013 13.456 22.9133 12.368 22.9133 11.136C22.9133 9.904 23.2013 8.816 23.7773 7.872C24.3533 6.928 25.1293 6.2 26.1053 5.688C27.0973 5.16 28.1853 4.896 29.3693 4.896C31.2413 4.896 32.6653 5.512 33.6413 6.744V5.088H37.1933ZM30.1133 14.304C31.1053 14.304 31.9133 14.016 32.5373 13.44C33.1773 12.848 33.4973 12.08 33.4973 11.136C33.4973 10.192 33.1773 9.432 32.5373 8.856C31.9133 8.264 31.1053 7.968 30.1133 7.968C29.1213 7.968 28.3053 8.264 27.6653 8.856C27.0253 9.432 26.7053 10.192 26.7053 11.136C26.7053 12.08 27.0253 12.848 27.6653 13.44C28.3053 14.016 29.1213 14.304 30.1133 14.304Z"
            fill="#252B42"
          />
          <path
            d="M46.922 18.192C45.562 18.192 44.338 17.912 43.25 17.352C42.178 16.776 41.338 15.984 40.73 14.976C40.122 13.968 39.818 12.824 39.818 11.544C39.818 10.264 40.122 9.12 40.73 8.112C41.338 7.104 42.178 6.32 43.25 5.76C44.338 5.184 45.562 4.896 46.922 4.896C48.282 4.896 49.498 5.184 50.57 5.76C51.642 6.32 52.482 7.104 53.09 8.112C53.698 9.12 54.002 10.264 54.002 11.544C54.002 12.824 53.698 13.968 53.09 14.976C52.482 15.984 51.642 16.776 50.57 17.352C49.498 17.912 48.282 18.192 46.922 18.192ZM46.922 15.12C47.882 15.12 48.666 14.8 49.274 14.16C49.898 13.504 50.21 12.632 50.21 11.544C50.21 10.456 49.898 9.592 49.274 8.952C48.666 8.296 47.882 7.968 46.922 7.968C45.962 7.968 45.17 8.296 44.546 8.952C43.922 9.592 43.61 10.456 43.61 11.544C43.61 12.632 43.922 13.504 44.546 14.16C45.17 14.8 45.962 15.12 46.922 15.12Z"
            fill="#252B42"
          />
        </svg>
      );

    case "heart":
      return (
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 36C0 16.1177 16.1177 0 36 0V0C55.8823 0 72 16.1177 72 36V36C72 55.8823 55.8823 72 36 72V72C16.1177 72 0 55.8823 0 36V36Z"
            fill="#E74040"
          />
          <g clipPath="url(#clip0_3_211)">
            <path
              d="M35.9909 24.2182C29.0159 18.1176 20.1473 23.4778 20.0018 30.7444C19.9648 32.5964 20.4994 34.4003 21.5635 36.0633H28.4607L29.6875 34.0186C30.0437 33.425 30.9058 33.4059 31.2822 33.9977L33.8705 38.0651L37.6436 30.1C37.9726 29.405 38.9532 29.3829 39.3161 30.0569L42.5504 36.0633H50.4184C56.2468 26.954 44.7279 16.5766 35.9909 24.2182V24.2182Z"
              fill="white"
            />
            <path
              d="M41.1651 37.4452L38.5443 32.578L34.8383 40.4018C34.523 41.0674 33.5956 41.1252 33.2002 40.5037L30.5148 36.2839L29.7953 37.483C29.6259 37.7654 29.3208 37.9381 28.9915 37.9381H23.0464C23.2328 38.1332 22.2395 37.1419 35.3297 50.1643C35.6953 50.5281 36.2863 50.5282 36.652 50.1643C49.5408 37.3423 48.7493 38.1328 48.9353 37.9381H41.9905C41.6456 37.9382 41.3286 37.7488 41.1651 37.4452V37.4452Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_211">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(20 20)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "earphone":
      return (
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 36C0 16.1178 16.1178 0 36 0C55.8823 0 72 16.1178 72 36C72 55.8823 55.8823 72 36 72C16.1178 72 0 55.8823 0 36Z"
            fill="#E74040"
          />
          <path
            d="M30.25 40.5884V43.5C30.25 48.1527 34.0348 52 38.6875 52C43.3402 52 47.125 48.1527 47.125 43.5V42.4676C49.262 42.0321 50.875 40.1385 50.875 37.875C50.875 35.2904 48.7721 33.1875 46.1875 33.1875C43.603 33.1875 41.5 35.2904 41.5 37.875C41.5 40.1385 43.1131 42.0321 45.25 42.4676V43.5C45.25 47.1182 42.3057 50.125 38.6875 50.125C35.0693 50.125 32.125 47.1182 32.125 43.5V40.5896C35.9511 39.8877 40.3667 35.1368 41.1311 30.6176C41.6323 27.6493 40.3938 25.273 37.75 24.0844V22.8125C37.75 21.2616 36.4884 20 34.9375 20C33.3866 20 32.125 21.2616 32.125 22.8125C32.125 24.3634 33.3866 25.625 34.9375 25.625H36.602C38.7591 26.4237 39.6658 28.0357 39.2817 30.3054C38.6234 34.201 34.2362 38.8125 31.1875 38.8125C27.773 38.8125 23.0271 33.3901 22.9983 29.375C22.9855 27.5853 23.9232 26.3021 25.7479 25.625H27.4375C28.9884 25.625 30.25 24.3634 30.25 22.8125C30.25 21.2616 28.9885 20 27.4375 20C25.8866 20 24.625 21.2616 24.625 22.8125V24.074C22.3698 25.0839 21.1201 26.9762 21.125 29.375C21.1346 34.0759 26.0051 39.802 30.25 40.5884ZM45.25 36.9375H47.125V38.8125H45.25V36.9375Z"
            fill="white"
          />
        </svg>
      );

    case "story":
      return (
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 36C0 16.1178 16.1178 0 36 0C55.8823 0 72 16.1178 72 36C72 55.8823 55.8823 72 36 72C16.1178 72 0 55.8823 0 36Z"
            fill="#E74040"
          />
          <g clipPath="url(#clip0_3_232)">
            <path
              d="M26.3484 52H45.6516C46.8003 52 47.7565 51.1215 47.7565 50.0418V26.6285C47.7565 25.5486 46.8003 24.6609 45.6516 24.6609H42.4696V26.4486C42.4742 26.759 42.2293 27.0157 41.9193 27.0261H30.0429C29.7266 27.0185 29.4712 26.7649 29.4609 26.4486V24.6609H26.3484C25.1997 24.6609 24.2435 25.5486 24.2435 26.6285V50.0418C24.2435 51.1215 25.1997 52 26.3484 52ZM30.6435 34.0522C30.6435 33.7448 30.8927 33.4956 31.2 33.4956H34.0522V30.6435C34.0522 30.3361 34.3013 30.0869 34.6087 30.0869H37.3913C37.6986 30.0869 37.9478 30.3361 37.9478 30.6435V33.4956H40.8C41.1073 33.4956 41.3565 33.7448 41.3565 34.0522V36.8348C41.3565 37.1421 41.1073 37.3913 40.8 37.3913H37.9478V40.2435C37.9478 40.5508 37.6986 40.8 37.3913 40.8H34.6087C34.3013 40.8 34.0522 40.5508 34.0522 40.2435V37.3913H31.2C30.8927 37.3913 30.6435 37.1421 30.6435 36.8348V34.0522ZM30.8701 43.6522H41.1299C41.4375 43.6522 41.6864 43.9013 41.6864 44.2087C41.6864 44.516 41.4375 44.7652 41.1299 44.7652H30.8701C30.5625 44.7652 30.3136 44.516 30.3136 44.2087C30.3136 43.9013 30.5625 43.6522 30.8701 43.6522ZM28.7831 46.4348H43.2168C43.5244 46.4348 43.7734 46.684 43.7734 46.9913C43.7734 47.2986 43.5244 47.5478 43.2168 47.5478H28.7831C28.4755 47.5478 28.2266 47.2986 28.2266 46.9913C28.2266 46.684 28.4755 46.4348 28.7831 46.4348Z"
              fill="white"
            />
            <path
              d="M41.3565 22.1565H38.7522C38.4902 22.1563 38.2636 21.9734 38.2084 21.7171C37.9932 20.7226 37.0486 20 35.9622 20H35.9554C34.8981 19.9989 33.9745 20.7144 33.7114 21.7383C33.6481 21.9842 33.4264 22.1563 33.1723 22.1565H30.5739V25.913H41.3565V22.1565Z"
              fill="white"
            />
            <path
              d="M35.1652 36.8348V39.687H36.8348V36.8348C36.8348 36.5275 37.084 36.2783 37.3913 36.2783H40.2435V34.6087H37.3913C37.084 34.6087 36.8348 34.3595 36.8348 34.0522V31.2H35.1652V34.0522C35.1652 34.3595 34.916 34.6087 34.6087 34.6087H31.7565V36.2783H34.6087C34.916 36.2783 35.1652 36.5275 35.1652 36.8348Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_232">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(20 20)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return null;
  }
}