import React from "react";



const getViewBox = name => {
    switch (name) {
      case "restaurant":
        return "0 0 100 100";
      case "home":
        return "-20 0 300 300";
      case "reservation":
            return "0 -40 700 700";
      case "menu":
        return "0 0 110 110";
      case "message":
        return "0 0 50 50";
      case "facebook":
        return "-10 -10 50 50";
      case "instagram":
        return "50 30 500 500";
      case "twitter":
        return "-10 -10 50 50";
      case "wifi":
        return "0 0 12 9";
      case "bookmark":
        return "0 0 40 40";
      case "team":
        return "0 0 600 600";
      case "order":
        return "0 -100 450 450";
      case "covid":
        return "0 0 600 600";
      default:
        return "0 0 32 32";
    }
  };

const getPath = (name, props) =>{
    switch(name){
        case 'restaurant':
            return(
                <React.Fragment>
                <path {...props} d="M73.5,39c0-5.42-11.65-8.25-23.17-8.25S27.17,33.53,27.17,39c0,5.21,10.77,8,21.83,8.24V82.5a1.5,1.5,0,0,0,3,0V47.18C62.94,46.92,73.5,44.11,73.5,39ZM30.17,39c0-1.78,7.12-5.25,20.17-5.25S70.5,37.17,70.5,39s-7.12,5.25-20.17,5.25S30.17,40.74,30.17,39Z"/>
                <path {...props} d="M29.35,56H15c-.14-5.44-.86-24-4.14-30.2a1.5,1.5,0,1,0-2.65,1.4C11.62,33.71,12,57.28,12,57.52v24a1.5,1.5,0,0,0,3,0V69H32V81.5a1.5,1.5,0,0,0,3,0V61.65A5.66,5.66,0,0,0,29.35,56ZM15,66V59H29.35A2.65,2.65,0,0,1,32,61.65V66Z"/>
                <path {...props} d="M92.2,25.17a1.5,1.5,0,0,0-2,.62C86.89,32,86.17,50.56,86,56H71.65A5.66,5.66,0,0,0,66,61.65V81.5a1.5,1.5,0,0,0,3,0V69H86V81.5a1.5,1.5,0,0,0,3,0v-24c0-.24.38-23.81,3.83-30.32A1.5,1.5,0,0,0,92.2,25.17ZM69,66V61.65A2.65,2.65,0,0,1,71.65,59H86v7Z"/>     
                </React.Fragment>
            );
        case 'home':
            return(
                <path {...props} d="M228.065,125.587l-51.619-51.615V23.263c0-4.142-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5v35.709L120.43,17.96  c-2.928-2.929-7.677-2.928-10.606,0L2.197,125.587c-2.929,2.929-2.929,7.678,0,10.606c2.93,2.929,7.678,2.929,10.608,0l18.72-18.72  v89.525c0,4.142,3.357,7.5,7.5,7.5h152.215c4.143,0,7.5-3.358,7.5-7.5v-89.524l18.721,18.719c1.464,1.464,3.384,2.196,5.303,2.196  c1.919,0,3.839-0.732,5.304-2.197C230.994,133.264,230.994,128.516,228.065,125.587z M183.739,199.499H46.524v-97.025l68.604-68.604  l68.611,68.606V199.499z"/>  
            );
        case 'menu':
            return(
                <React.Fragment>
                    <path {...props} d="M75,17.22v0a1.51,1.51,0,0,0-.09-.28l-.05-.1a1.5,1.5,0,0,0-.08-.15l0-.06a1.48,1.48,0,0,0-.42-.38l-.21-.11h0l-33-13.5A1.5,1.5,0,0,0,39,4V16H27.5A1.5,1.5,0,0,0,26,17.5v75A1.5,1.5,0,0,0,27.5,94h46A1.5,1.5,0,0,0,75,92.5v-75h0A1.49,1.49,0,0,0,75,17.22Zm-33-11L65.87,16H42ZM72,91H29V19H72Z"/>
                    <path {...props} d="M38.92,34.5A11.76,11.76,0,0,0,49,46.12V53H44a1.5,1.5,0,0,0,0,3H57a1.5,1.5,0,0,0,0-3H52V46.17A11.76,11.76,0,0,0,62.42,34.5a1.5,1.5,0,0,0-1.5-1.5H40.42A1.5,1.5,0,0,0,38.92,34.5ZM59.3,36a8.75,8.75,0,0,1-17.24,0Z"/>
                    <path {...props} d="M36,68.5A1.5,1.5,0,0,0,37.5,70h26a1.5,1.5,0,0,0,0-3h-26A1.5,1.5,0,0,0,36,68.5Z"/>
                    <path {...props} d="M57.17,75h-13a1.5,1.5,0,0,0,0,3h13a1.5,1.5,0,0,0,0-3Z"/>
                </React.Fragment> 
               );
        case 'message':
            return(
                <path
                {...props}
                d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z"
             />
            );
        case 'bookmark':
            return(
                <path {...props} d="M18.188 2c0.234 0 0.469 0.047 0.688 0.141 0.688 0.266 1.125 0.906 1.125 1.609v20.141c0 0.703-0.438 1.344-1.125 1.609-0.219 0.094-0.453 0.125-0.688 0.125-0.484 0-0.938-0.172-1.297-0.5l-6.891-6.625-6.891 6.625c-0.359 0.328-0.812 0.516-1.297 0.516-0.234 0-0.469-0.047-0.688-0.141-0.688-0.266-1.125-0.906-1.125-1.609v-20.141c0-0.703 0.438-1.344 1.125-1.609 0.219-0.094 0.453-0.141 0.688-0.141h16.375z"></path>
            );
        case 'team':
            return(
               <path {...props} d="M374.493,353l97.028-97.027c14.695-14.696,14.695-38.608-0.001-53.304c-5.182-5.182-11.511-8.528-18.177-10.055    c2.286-4.914,3.496-10.307,3.496-15.888c0-10.068-3.921-19.533-11.039-26.651c-5.583-5.584-12.612-9.19-20.241-10.489    c4.295-13.086,1.259-28.073-9.128-38.459c-5.711-5.71-12.814-9.19-20.227-10.462c1.242-3.769,1.897-7.749,1.897-11.833    c0-10.068-3.921-19.533-11.039-26.651c-7.119-7.118-16.584-11.039-26.651-11.039c-6.393,0-12.54,1.586-18.001,4.564l-0.965-1.037    c-12.542-13.478-30.295-21.207-48.704-21.207h-78.54c-5.523,0-10.002,4.479-10.002,10.002v13.116    c0,5.249,0.888,10.359,2.586,15.164c-4.524-1.879-9.419-2.866-14.465-2.866c-10.068,0-19.533,3.921-26.652,11.039    c-10.392,10.392-13.425,25.39-9.12,38.48c-7.419,1.269-14.532,4.751-20.248,10.466c-7.118,7.119-11.039,16.584-11.039,26.651    c0,4.076,0.653,8.05,1.89,11.811c-7.62,1.303-14.642,4.907-20.22,10.486c-11.477,11.477-13.99,28.577-7.539,42.516    c-6.831,1.561-13.105,5.001-18.183,10.078c-14.695,14.695-14.695,38.607,0,53.303l19.954,19.953L2.929,391.893    c-3.906,3.906-3.906,10.239,0,14.146c1.953,1.952,4.513,2.93,7.072,2.93s5.119-0.977,7.072-2.93l99.182-99.182    c5.615,3.204,11.987,4.918,18.628,4.918c10.067,0,19.532-3.921,26.651-11.04c7.734-7.733,11.392-18.02,10.985-28.172    c0.507,0.021,1.014,0.036,1.521,0.036c9.65-0.001,19.305-3.675,26.651-11.021c7.118-7.119,11.039-16.584,11.039-26.651    c0-0.509-0.017-1.015-0.037-1.521c0.501,0.02,1.002,0.036,1.504,0.036c9.651,0,19.304-3.674,26.651-11.021    c7.118-7.119,11.039-16.584,11.039-26.651c0-0.509-0.017-1.015-0.037-1.521c0.501,0.02,1.002,0.036,1.504,0.036    c9.652,0,19.304-3.674,26.651-11.021c13.808-13.808,14.639-35.751,2.5-50.542l66.394-66.394c3.341-3.342,7.781-5.181,12.506-5.181    s9.166,1.839,12.507,5.181c3.341,3.341,5.18,7.781,5.18,12.506c0,4.724-1.839,9.166-5.181,12.506l-9.789,9.789l-35.518,35.518    c-3.906,3.906-3.906,10.239,0,14.146c1.953,1.952,4.513,2.93,7.072,2.93s5.119-0.977,7.072-2.93l35.518-35.518    c6.895-6.896,18.116-6.897,25.013-0.001c6.896,6.897,6.896,18.117,0,25.014l-9.79,9.79l-25.728,25.728    c-3.906,3.906-3.906,10.239,0,14.146c1.953,1.952,4.513,2.93,7.072,2.93s5.119-0.977,7.072-2.93l25.728-25.728    c3.341-3.342,7.782-5.181,12.506-5.181c4.725,0,9.166,1.839,12.507,5.181c3.341,3.341,5.18,7.781,5.18,12.506    c0,4.724-1.839,9.166-5.181,12.506l-13.437,13.437l-12.291,12.291c-3.906,3.906-3.906,10.239,0,14.146    c1.953,1.952,4.513,2.93,7.072,2.93s5.119-0.977,7.072-2.93l12.3-12.3c6.897-6.885,18.111-6.884,25.004,0.009    c6.897,6.896,6.897,18.117,0,25.014l-97.028,97.027c-24.364,24.365-56.745,38.47-91.178,39.72    c-2.531,0.092-4.935,1.141-6.723,2.937l-89.632,89.964c-3.899,3.913-3.888,10.246,0.026,14.145    c1.951,1.944,4.505,2.917,7.059,2.917c2.565,0,5.132-0.981,7.085-2.943l65.927-66.17c16.746,10.743,36.44,15.851,56.465,14.527    l51.598,51.599c1.953,1.952,4.513,2.93,7.072,2.93c2.56,0,5.119-0.977,7.072-2.93c3.906-3.906,3.906-10.239,0-14.146    l-54.86-54.866c-2.077-2.076-4.963-3.137-7.89-2.897l-3.171,0.26c-14.637,1.2-29.105-2.006-41.737-9.085l6.428-6.451    C311.894,396.026,347.486,380.008,374.493,353z M147.39,286.591c-3.341,3.342-7.783,5.181-12.506,5.181    c-4.725,0-9.166-1.839-12.506-5.181l-27.026-27.025c-6.896-6.896-6.896-18.117,0-25.014c3.341-3.342,7.783-5.181,12.507-5.181    c4.724,0,9.166,1.839,12.506,5.181l27.026,27.025C154.286,268.473,154.286,279.694,147.39,286.591z M186.549,247.432    c-6.897,6.896-18.12,6.896-25.014,0l-27.026-27.026l-13.438-13.438c-6.896-6.896-6.896-18.117,0-25.013    c3.341-3.342,7.783-5.181,12.506-5.181c4.725,0,9.166,1.839,12.506,5.181l40.463,40.463c0,0,0,0,0.001,0    c3.342,3.342,5.181,7.783,5.181,12.507S189.889,244.091,186.549,247.432z M225.706,208.274c-6.897,6.895-18.119,6.896-25.014,0    l-50.253-50.253c-3.341-3.341-5.18-7.781-5.18-12.506c0-4.724,1.839-9.166,5.181-12.506c3.448-3.448,7.978-5.172,12.506-5.172    c4.526,0,9.051,1.722,12.498,5.164l22.904,22.904l27.356,27.356h0.001c3.34,3.341,5.179,7.781,5.179,12.506    C230.886,200.492,229.047,204.934,225.706,208.274z M264.864,169.116c-6.896,6.896-18.117,6.896-25.013,0l-50.253-50.253    c-0.005-0.005-0.011-0.01-0.017-0.016l-9.773-9.773c-6.896-6.897-6.896-18.117,0-25.014c3.448-3.449,7.978-5.173,12.507-5.173    c4.529,0,9.059,1.724,12.506,5.173l60.041,60.041c3.342,3.341,5.181,7.782,5.181,12.506    C270.044,161.333,268.206,165.776,264.864,169.116z M267.494,118.444l-27.472-27.472c3.115,0.665,6.318,1.018,9.578,1.017    c0.073,0,0.147,0,0.221,0l27.448-0.129c5.523-0.026,9.981-4.525,9.955-10.049c-0.026-5.508-4.499-9.955-10.001-9.955    c-0.016,0-0.032,0-0.048,0l-27.448,0.129c-0.042,0-0.082,0-0.124,0c-6.763,0-13.124-2.625-17.92-7.398    c-4.826-4.804-7.483-11.198-7.483-18.008v-3.114h68.538c12.875,0,25.29,5.405,34.062,14.831l0.407,0.437L267.494,118.444z"/>
                );
        case 'facebook':
            return(
                <path {...props} d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>                
                );
        case 'twitter':
            return(
                <path {...props} d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>                
            );
        case 'instagram':
            return(
                <path {...props} d="M300,123.5c-47.9,0-54,0.2-72.8,1.1c-18.8,0.9-31.6,3.8-42.8,8.2c-11.6,4.5-21.5,10.5-31.3,20.4   c-9.8,9.8-15.8,19.7-20.4,31.3c-4.4,11.2-7.4,24.1-8.2,42.8c-0.8,18.8-1.1,24.8-1.1,72.8c0,47.9,0.2,53.9,1.1,72.8   c0.9,18.8,3.8,31.6,8.2,42.8c4.5,11.6,10.5,21.5,20.4,31.3c9.8,9.8,19.7,15.9,31.3,20.4c11.2,4.4,24.1,7.3,42.8,8.2   c18.8,0.9,24.8,1.1,72.8,1.1c47.9,0,53.9-0.2,72.8-1.1c18.8-0.9,31.6-3.8,42.9-8.2c11.6-4.5,21.4-10.6,31.2-20.4   c9.8-9.8,15.8-19.7,20.4-31.3c4.3-11.2,7.3-24,8.2-42.8c0.8-18.8,1.1-24.8,1.1-72.8c0-47.9-0.2-53.9-1.1-72.8   c-0.9-18.8-3.9-31.6-8.2-42.8c-4.5-11.6-10.6-21.5-20.4-31.3c-9.8-9.8-19.6-15.8-31.3-20.4c-11.3-4.4-24.1-7.3-42.9-8.2   C353.9,123.7,347.9,123.5,300,123.5L300,123.5z M284.2,155.3c4.7,0,9.9,0,15.8,0c47.1,0,52.7,0.2,71.3,1   c17.2,0.8,26.5,3.7,32.8,6.1c8.2,3.2,14.1,7,20.3,13.2c6.2,6.2,10,12.1,13.2,20.3c2.4,6.2,5.3,15.6,6.1,32.8   c0.8,18.6,1,24.2,1,71.3c0,47.1-0.2,52.7-1,71.3c-0.8,17.2-3.7,26.5-6.1,32.8c-3.2,8.2-7,14.1-13.2,20.3c-6.2,6.2-12,10-20.3,13.2   c-6.2,2.4-15.6,5.3-32.8,6.1c-18.6,0.8-24.2,1-71.3,1c-47.1,0-52.7-0.2-71.3-1c-17.2-0.8-26.5-3.7-32.8-6.1   c-8.2-3.2-14.1-7-20.3-13.2c-6.2-6.2-10-12.1-13.2-20.3c-2.4-6.2-5.3-15.6-6.1-32.8c-0.8-18.6-1-24.2-1-71.3   c0-47.1,0.2-52.7,1-71.3c0.8-17.2,3.7-26.5,6.1-32.8c3.2-8.2,7-14.1,13.2-20.3c6.2-6.2,12.1-10,20.3-13.2   c6.2-2.4,15.6-5.3,32.8-6.1C245,155.5,251.3,155.3,284.2,155.3L284.2,155.3z M394.2,184.6c-11.7,0-21.2,9.5-21.2,21.2   c0,11.7,9.5,21.2,21.2,21.2c11.7,0,21.2-9.5,21.2-21.2C415.4,194.1,405.9,184.6,394.2,184.6L394.2,184.6z M300,209.4   c-50.1,0-90.6,40.6-90.6,90.6c0,50.1,40.6,90.6,90.6,90.6c50.1,0,90.6-40.6,90.6-90.6C390.6,249.9,350.1,209.4,300,209.4L300,209.4   z M300,241.2c32.5,0,58.8,26.3,58.8,58.8c0,32.5-26.3,58.8-58.8,58.8c-32.5,0-58.8-26.3-58.8-58.8   C241.2,267.5,267.5,241.2,300,241.2z"/>
            );
        case 'reservation':
            return(
                <React.Fragment>
                    <path {...props} d="m355.519531 512.113281c11.570313-.03125 21.695313-7.78125 24.746094-18.941406l23.597656-88.101563 89.367188-23.890624c13.617187-3.703126 21.679687-17.710938 18.050781-31.34375l-46.335938-172.699219 3.667969-13.652344c3.316407-12.574219-3.324219-25.636719-15.4375-30.371094l-20.863281-77.882812c-3.734375-13.605469-17.707031-21.679688-31.359375-18.125l-152.40625 40.882812-127.796875-34.261719c-5.238281-1.4375-10.800781-1.136718-15.851562.855469l-31.925782-31.871093c-10.761718-10.859376-26.507812-15.132813-41.28125-11.199219-14.773437 3.933593-26.3125 15.46875-30.25 30.242187-3.9375 14.773438.328125 30.523438 11.183594 41.285156l58.191406 58.191407-69.71875 260.265625c-3.648437 13.648437 4.421875 27.675781 18.054688 31.386718l329.722656 88.34375c2.164062.589844 4.398438.890626 6.644531.886719zm139.25-157.867187c1.207031 4.527344-1.460937 9.183594-5.976562 10.429687l-79.820313 21.332031 47.113282-175.878906zm-89.449219-300.636719c2.199219-.601563 4.546876-.296875 6.519532.84375 1.972656 1.136719 3.40625 3.019531 3.984375 5.222656l18.203125 67.996094-152.515625-40.859375zm-146.773437 205.054687-43.082031-14.359374 28.722656-28.75 14.359375 43.078124zm-34.730469-46.828124-72.40625-72.414063c-3.332031-3.332031-8.738281-3.332031-12.070312.003906-3.332032 3.332031-3.328125 8.738281.007812 12.070313l72.410156 72.394531-12.0625 12.078125-120.6875-120.6875 12.066407-12.066406 24.128906 24.140625c2.160156 2.15625 5.300781 3 8.25 2.207031 2.945313-.789062 5.246094-3.089844 6.035156-6.035156.789063-2.945313-.050781-6.089844-2.207031-8.246094l-24.132812-24.132812 12.066406-12.074219 120.667968 120.6875zm-168.949218-120.6875 36.207031-36.207032 12.066406 12.066406-36.199219 36.207032zm-37.667969-48.273438c0-10.355469 6.238281-19.695312 15.804687-23.65625 9.570313-3.960938 20.582032-1.769531 27.902344 5.554688l18.101562 18.101562-36.207031 36.207031-18.109375-18.109375c-4.8125-4.789062-7.511718-11.304687-7.492187-18.097656zm.394531 353.101562 67.171875-250.796874 108.886719 108.886718c.890625.871094 1.960937 1.53125 3.140625 1.9375.066406 0 .117187.09375.195312.117188l56.210938 18.773437c1.753906.578125 3.59375.863281 5.441406.855469 3.214844-.011719 6.359375-.9375 9.0625-2.671875l98.132813 26.351563c.722656.199218 1.46875.300781 2.21875.296874 4.285156 0 7.902343-3.175781 8.457031-7.421874.558593-4.246094-2.117188-8.246094-6.253907-9.351563l-94.71875-25.429687c-.085937-1.449219-.347656-2.882813-.785156-4.269532l-18.773437-56.214844c0-.078124-.09375-.128906-.128907-.207031-.40625-1.167969-1.066406-2.234375-1.929687-3.121093l-131.890625-131.945313 324.019531 86.792969c2.191407.585937 4.058594 2.015625 5.191407 3.980468 1.132812 1.960938 1.4375 4.292969.851562 6.484376l-88.304688 329.683593c-.582031 2.191407-2.015624 4.0625-3.980468 5.195313-1.964844 1.132812-4.300782 1.4375-6.488282.847656l-329.6875-88.3125c-2.1875-.585938-4.054687-2.015625-5.191406-3.976562-1.132812-1.964844-1.4375-4.296876-.847656-6.484376zm0 0"/>
                    <path {...props} d="m394.578125 200.785156c4.28125-.003906 7.898437-3.179687 8.457031-7.425781.554688-4.242187-2.121094-8.246094-6.253906-9.351563l-121.371094-32.519531c-2.976562-.886719-6.195312-.085937-8.410156 2.089844-2.214844 2.171875-3.074219 5.378906-2.246094 8.367187.828125 2.992188 3.21875 5.296876 6.234375 6.019532l121.378907 32.527344c.722656.195312 1.464843.292968 2.210937.292968zm0 0"/>
                    <path {...props} d="m381.316406 250.234375c4.28125-.003906 7.898438-3.175781 8.457032-7.421875.558593-4.246094-2.117188-8.246094-6.253907-9.355469l-82.519531-22.074219c-2.964844-.84375-6.152344-.027343-8.34375 2.144532-2.191406 2.167968-3.039062 5.351562-2.222656 8.324218.816406 2.972657 3.171875 5.273438 6.164062 6.015626l82.519532 22.078124c.714843.191407 1.457031.289063 2.199218.289063zm0 0"/>
                    <path {...props} d="m118.003906 268.324219-24.746094-6.628907c-2.96875-.867187-6.175781-.0625-8.378906 2.109376-2.203125 2.167968-3.0625 5.359374-2.242187 8.34375.820312 2.980468 3.1875 5.285156 6.191406 6.023437l24.746094 6.640625c.726562.191406 1.46875.289062 2.21875.289062 4.285156.003907 7.90625-3.171874 8.464843-7.417968.558594-4.246094-2.117187-8.25-6.253906-9.359375zm0 0"/>
                    <path {...props} d="m363.0625 342.8125c1.21875-4.550781-1.484375-9.222656-6.03125-10.445312l-189.585938-50.789063c-4.398437-.859375-8.710937 1.835937-9.875 6.164063-1.160156 4.328124 1.226563 8.820312 5.464844 10.277343l189.574219 50.792969c.722656.199219 1.464844.296875 2.210937.296875 3.855469.003906 7.234376-2.578125 8.242188-6.296875zm0 0"/>
                    <path {...props} d="m104.742188 317.777344-24.746094-6.632813c-4.542969-1.191406-9.195313 1.511719-10.410156 6.046875-1.214844 4.539063 1.46875 9.207032 6 10.441406l24.746093 6.621094c.71875.199219 1.460938.300782 2.210938.296875 4.28125.003907 7.902343-3.171875 8.460937-7.417969.5625-4.246093-2.113281-8.25-6.253906-9.355468zm0 0"/>
                    <path {...props} d="m343.777344 381.828125-189.574219-50.800781c-2.976563-.882813-6.195313-.082032-8.410156 2.089844-2.214844 2.175781-3.074219 5.378906-2.246094 8.371093.828125 2.988281 3.21875 5.292969 6.234375 6.019531l189.578125 50.796876c.722656.199218 1.46875.300781 2.21875.300781 4.28125-.003907 7.898437-3.179688 8.457031-7.425781.554688-4.246094-2.121094-8.246094-6.257812-9.351563zm0 0"/>
                </React.Fragment>
            );
        case 'order':
            return(
                <React.Fragment>
                    <path {...props} d="M292.128,214.846c-2.342-2.344-6.143-2.344-8.484,0l-59.512,59.511V6c0-3.313-2.687-6-6-6s-6,2.687-6,6v268.356   l-59.513-59.512c-2.342-2.342-6.142-2.343-8.485,0.001c-2.343,2.343-2.343,6.142,0.001,8.485l69.755,69.754   c1.171,1.171,2.707,1.757,4.242,1.757s3.071-0.586,4.242-1.758l69.754-69.754C294.472,220.987,294.472,217.188,292.128,214.846z"/>
                    <path {...props} d="M6.956,12h180.137c3.313,0,6-2.687,6-6s-2.687-6-6-6H6.956c-3.313,0-6,2.687-6,6S3.643,12,6.956,12z"/>
                    <path {...props} d="M6.956,82.228h180.137c3.313,0,6-2.687,6-6s-2.687-6-6-6H6.956c-3.313,0-6,2.687-6,6S3.643,82.228,6.956,82.228z"/>
                    <path {...props} d="M6.956,152.456h180.137c3.313,0,6-2.687,6-6s-2.687-6-6-6H6.956c-3.313,0-6,2.687-6,6S3.643,152.456,6.956,152.456z"/>
                    <path {...props} d="M124.438,210.685H6.956c-3.313,0-6,2.687-6,6s2.687,6,6,6h117.482c3.313,0,6-2.687,6-6S127.752,210.685,124.438,210.685z"/>
                    <path {...props} d="M124.438,280.912H6.956c-3.313,0-6,2.687-6,6s2.687,6,6,6h117.482c3.313,0,6-2.687,6-6S127.752,280.912,124.438,280.912z"/>
                </React.Fragment>
                );
        case 'covid':
            return(
                <React.Fragment>
                    <path {...props} d="M503.839,395.379l-195.7-338.962C297.257,37.569,277.766,26.315,256,26.315c-21.765,0-41.257,11.254-52.139,30.102    L8.162,395.378c-10.883,18.85-10.883,41.356,0,60.205c10.883,18.849,30.373,30.102,52.139,30.102h391.398    c21.765,0,41.256-11.254,52.14-30.101C514.722,436.734,514.722,414.228,503.839,395.379z M477.861,440.586    c-5.461,9.458-15.241,15.104-26.162,15.104H60.301c-10.922,0-20.702-5.646-26.162-15.104c-5.46-9.458-5.46-20.75,0-30.208    L229.84,71.416c5.46-9.458,15.24-15.104,26.161-15.104c10.92,0,20.701,5.646,26.161,15.104l195.7,338.962    C483.321,419.836,483.321,431.128,477.861,440.586z"/>
                    <rect {...props} x="241.001" y="176.01" width="29.996" height="149.982"/>
                    <path {...props} xmlns="http://www.w3.org/2000/svg" d="M256,355.99c-11.027,0-19.998,8.971-19.998,19.998s8.971,19.998,19.998,19.998c11.026,0,19.998-8.971,19.998-19.998    S267.027,355.99,256,355.99z"/>
                </React.Fragment>
            );
        default:
            return <path />;
    }

};

// These are the defaults.
// All we are doing is applying the values we want.
const SVGIcon = ({
    name = "",
    style = {},
    fill = "#000",
    viewBox = "",
    width = "100%",
    className = "svg",
    height = "100%"
}) => (
      <svg
      width={width/2}
      style={style}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || getViewBox(name)}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {getPath(name, { fill })}
      {/* <div className="icon-box"></div> */}
    </svg>
  
);


export default SVGIcon;

