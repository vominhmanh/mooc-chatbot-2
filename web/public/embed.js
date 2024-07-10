/** this file is used to embed the chatbot in a website
 * the difyChatbotConfig should be defined in the html file before this script is included
 * the difyChatbotConfig should contain the token of the chatbot
 * the token can be found in the chatbot settings page
 */

// attention: This JavaScript script must be placed after the <body> element. Otherwise, the script will not work.

document.body.onload = embedChatbot;

async function embedChatbot () {
  const difyChatbotConfig = window.difyChatbotConfig;
  if (!difyChatbotConfig || !difyChatbotConfig.token) {
    console.error('difyChatbotConfig is empty or token is not provided')
    return;
  }
  const isDev = !!difyChatbotConfig.isDev
  const baseUrl = difyChatbotConfig.baseUrl || `https://${isDev ? 'dev.' : ''}udify.app`
  const openIcon = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_231_364)">
<path d="M1.86947 11.013C1.52515 11.013 1.24609 11.2316 1.24609 11.5013V20.9144C1.24609 21.184 1.52523 21.4026 1.86947 21.4026C2.21371 21.4026 2.49285 21.184 2.49285 20.9144V11.5013C2.49293 11.2316 2.21379 11.013 1.86947 11.013Z" fill="#F38744"/>
<path d="M3.87881 26.6667H4.8485V18.9091H3.87881C1.73656 18.9091 0 20.6457 0 22.7879C0 24.9241 1.73069 26.6667 3.87881 26.6667Z" fill="#D0D5DD"/>
<path d="M26.1826 26.6667H25.2129V18.9091H26.1826C28.3248 18.9091 30.0614 20.6457 30.0614 22.7879C30.0613 24.9241 28.3306 26.6667 26.1826 26.6667Z" fill="white"/>
<path d="M27.1525 22.7877C27.1525 27.8614 23.0417 31.9999 17.9403 31.9999H12.1217C7.03459 32 2.91016 27.8756 2.91016 22.7877C2.91016 16.112 8.31859 10.6669 15.031 10.6669C17.7015 10.6669 20.1755 11.5323 22.182 13.0005C25.1924 15.2028 27.1525 18.7606 27.1525 22.7877Z" fill="white"/>
<path d="M22.182 13.0005H21.2495C20.9932 13.0005 20.7473 13.1022 20.5663 13.2832L18.1348 15.7153C17.5262 16.3238 16.4857 15.8924 16.4857 15.0321V13.9663C16.4857 13.4325 16.0529 13.0004 15.5197 13.0004H14.5313C13.6935 13.0004 12.9182 12.7331 12.2852 12.2804C11.7675 11.9089 11.0379 12.1542 10.8248 12.755C9.23553 17.2319 8.35016 24.9881 16.1109 32H12.1217C7.03459 32 2.91016 27.8756 2.91016 22.7877C2.91016 16.112 8.31859 10.6669 15.031 10.6669C17.7015 10.6669 20.1755 11.5323 22.182 13.0005Z" fill="#EAECF0"/>
<path d="M24.2427 22.7878C24.2427 25.992 21.647 28.6058 18.4247 28.6058H11.637C8.42311 28.6058 5.81836 26.001 5.81836 22.7878C5.81836 20.2133 7.49392 18.0207 9.8243 17.2576C10.3942 17.0709 11.0034 16.9698 11.637 16.9698H18.4247C21.638 16.9698 24.2427 19.5745 24.2427 22.7878Z" fill="#D6BBFB"/>
<path d="M13.026 28.6058H11.637C8.42311 28.6058 5.81836 26.001 5.81836 22.7878C5.81836 20.2133 7.49392 18.0207 9.8243 17.2576C9.51517 20.6074 10.1244 24.6224 13.026 28.6058Z" fill="#9E77ED"/>
<path d="M32.0002 3.3575V8.27913C32.0002 10.133 30.4972 11.6366 28.6427 11.6366H21.2489C20.9926 11.6366 20.7467 11.7384 20.5657 11.9193L18.279 14.2053C17.9751 14.5099 17.4548 14.2942 17.4548 13.864V12.6025C17.4548 12.0687 17.022 11.6366 16.4888 11.6366H15.4759C13.3554 11.6366 11.6367 9.91725 11.6367 7.79675V3.3575C11.6367 1.50294 13.1397 0 14.9936 0H28.6427C30.4972 0 32.0002 1.503 32.0002 3.3575Z" fill="#F7B27A"/>
<path d="M22.1163 11.6367H21.2489C20.9926 11.6367 20.7467 11.7384 20.5657 11.9194L18.279 14.2054C17.9751 14.5099 17.4548 14.2942 17.4548 13.8641V12.6026C17.4548 12.0688 17.022 11.6366 16.4888 11.6366H15.4759C13.3554 11.6366 11.6367 9.91731 11.6367 7.79681V3.3575C11.6367 1.50294 13.1397 0 14.9936 0H19.561C18.6513 1.70588 17.6429 7.86581 22.1163 11.6367Z" fill="#F38744"/>
<path d="M1.93894 13.5758C2.74227 13.5758 3.3935 12.9245 3.3935 12.1212C3.3935 11.3179 2.74227 10.6666 1.93894 10.6666C1.1356 10.6666 0.484375 11.3179 0.484375 12.1212C0.484375 12.9245 1.1356 13.5758 1.93894 13.5758Z" fill="white"/>
<path d="M21.8178 7.27274C22.6212 7.27274 23.2724 6.62151 23.2724 5.81818C23.2724 5.01485 22.6212 4.36362 21.8178 4.36362C21.0145 4.36362 20.3633 5.01485 20.3633 5.81818C20.3633 6.62151 21.0145 7.27274 21.8178 7.27274Z" fill="#9E77ED"/>
<path d="M27.6362 7.27274C28.4395 7.27274 29.0908 6.62151 29.0908 5.81818C29.0908 5.01485 28.4395 4.36362 27.6362 4.36362C26.8329 4.36362 26.1816 5.01485 26.1816 5.81818C26.1816 6.62151 26.8329 7.27274 27.6362 7.27274Z" fill="#9E77ED"/>
<path d="M15.9995 7.27274C16.8028 7.27274 17.454 6.62151 17.454 5.81818C17.454 5.01485 16.8028 4.36362 15.9995 4.36362C15.1962 4.36362 14.5449 5.01485 14.5449 5.81818C14.5449 6.62151 15.1962 7.27274 15.9995 7.27274Z" fill="#7F56D9"/>
<path d="M11.6654 23.4293C11.6658 24.2946 10.7853 24.9965 9.69872 24.9971C8.61216 24.9976 7.73091 24.2966 7.73047 23.4313C7.73003 22.566 8.61053 21.8641 9.69716 21.8635C10.7837 21.8629 11.665 22.564 11.6654 23.4293Z" fill="#F38744"/>
<path d="M18.3945 23.4259C18.395 24.2912 19.2762 24.9922 20.3628 24.9917C21.4493 24.9911 22.3298 24.2892 22.3295 23.4239C22.329 22.5586 21.4478 21.8576 20.3612 21.8581C19.2746 21.8587 18.3941 22.5606 18.3945 23.4259Z" fill="#F38744"/>
<path d="M16.9587 22.7183C16.9581 21.5264 16.0946 21.4149 15.0295 21.4154C13.9644 21.416 13.101 21.5284 13.1016 22.7202C13.1022 23.9121 13.9661 24.8779 15.0312 24.8773C16.0964 24.8768 16.9593 23.9102 16.9587 22.7183Z" fill="#7F56D9"/>
<path d="M9.90677 22.2082C9.64014 22.2082 9.42395 21.9921 9.42383 21.7254C9.42345 20.941 10.0579 20.3057 10.8425 20.3053C11.6245 20.3049 12.2622 20.9407 12.2626 21.724C12.2628 21.9907 12.0466 22.207 11.78 22.2072C11.5136 22.2074 11.2969 21.9916 11.2968 21.7245C11.2966 21.3192 10.8054 21.1209 10.5224 21.4042C10.4368 21.4899 10.3897 21.6038 10.3898 21.7249C10.3899 21.991 10.1744 22.2082 9.90677 22.2082Z" fill="#53389E"/>
<path d="M18.2779 22.204C18.0112 22.204 17.795 21.9879 17.7949 21.7212C17.7945 20.9386 18.431 20.3016 19.2137 20.3011C19.998 20.3007 20.6334 20.9352 20.6338 21.7199C20.6339 21.9866 20.4178 22.2029 20.1511 22.2031C19.8852 22.2032 19.668 21.9879 19.6679 21.7203C19.6678 21.4699 19.465 21.2671 19.2144 21.2671C18.965 21.2671 18.7608 21.4699 18.7609 21.7208C18.761 21.9863 18.546 22.204 18.2779 22.204Z" fill="#53389E"/>
</g>
<defs>
<clipPath id="clip0_231_364">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
`
  const closeIcon = `<svg
          id="closeIcon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 18L6 6M6 18L18 6"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`

  // create iframe
  function createIframe () {
    const iframe = document.createElement('iframe');
    iframe.allow = "fullscreen;microphone"
    iframe.title = "dify chatbot bubble window"
    iframe.id = 'dify-chatbot-bubble-window'
    iframe.src = `${baseUrl}/chatbot/${difyChatbotConfig.token}`
    iframe.style.cssText = 'border: none; position: fixed; flex-direction: column; justify-content: space-between; box-shadow: rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px; bottom: 5rem; right: 1rem; width: 24rem; max-width: calc(100vw - 2rem); height: 40rem; max-height: calc(100vh - 6rem);border-radius: 0.75rem; display: flex; z-index: 2147483647; overflow: hidden; left: unset; background-color: #F3F4F6;'
    document.body.appendChild(iframe);
  }

  const targetButton = document.getElementById('dify-chatbot-bubble-button')
  if (!targetButton) {
    // create button
    const containerDiv = document.createElement("div");
    containerDiv.id = 'dify-chatbot-bubble-button'
    containerDiv.style.cssText = `position: fixed; bottom: 1rem; right: 1rem; width: 50px; height: 50px; border-radius: 25px; background-color: #7F56D9; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px; cursor: pointer; z-index: 2147483647; transition: all 0.2s ease-in-out 0s; left: unset; transform: scale(1); :hover {transform: scale(1.1);}`;
    const displayDiv = document.createElement('div');
    displayDiv.style.cssText = 'display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 2147483647;';
    displayDiv.innerHTML = openIcon
    containerDiv.appendChild(displayDiv);
    document.body.appendChild(containerDiv);
    // add click event to control iframe display
    containerDiv.addEventListener('click', function () {
      const targetIframe = document.getElementById('dify-chatbot-bubble-window')
      if (!targetIframe) {
        createIframe()
        displayDiv.innerHTML = closeIcon
        return;
      }
      if (targetIframe.style.display === 'none') {
        targetIframe.style.display = 'block';
        displayDiv.innerHTML = closeIcon
      } else {
        targetIframe.style.display = 'none';
        displayDiv.innerHTML = openIcon
      }
    });
  }
}
