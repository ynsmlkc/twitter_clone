import classNames from "classnames"
import store from "../store"

const states = store.getState()

export const mainMenu = [
    {
        path: '/',
        title: 'Anasayfa',
        icon: {
            active:  (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="rounded-full" items-center flex >
                 
                 <path fill="#fff" d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z">
                 </path>
            
                </svg>
               ),
            passive:  (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="rounded-full">
                  
                      <path fill="#e7e9ea" d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z">
                      </path>
                  
                </svg>
               ),

        }
    },
    {
        path: '/explore',
        title: 'Keşfet',
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                 
                 <path fill="#fff" d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z">
                 </path>
            
                </svg>
               ),
            passive:    (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                  
                      <path fill="#e7e9ea" d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z">
                      </path>
                  
                </svg>
               ),
        }
    },
    {
        path: '/notifications',
        title:'Bildirimler',
        notification: 4,
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                     
                 <path fill="#fff" d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z">
       
                 </path>
                
                </svg>
               ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                      

                <path fill="#e7e9ea" d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z">
      
                </path>
                      
                </svg>
               )
            }
    },
    {
        path: '/messages',
        title:'Mesajlar',
        notification: 4,
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                     

                     <path fill="#fff" d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z">

                     </path>
       
               
                
                </svg>
               ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                      

                <path fill="#e7e9ea" d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z">

                </path>
                      
                </svg>
               )
            }
    },
    
    {
        path: '/grok',
        title:'Grok',
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block" >
                    <g>
                        <g clip-path="url(#6-clip0_3304_259)">
                            <path fill="currentColor" clip-rule="evenodd" d="M4 0C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4H4zm5.982 11.941L16.58 2.55h3.82l-8.509 12.109-1.91-2.718zm-6.678-2.71l8.587 12.219h3.816L7.121 9.23H3.304zm3.813 6.786L3.3 21.45h3.819l1.908-2.715-1.91-2.718zm10.155-7.656V21.45H20.4V3.909L17.272 8.36z" fill-rule="evenodd">
                            </path>
                                </g>
                                <defs>
                                    <clipPath id="6-clip0_3304_259">
                                        <path d="M0 0h24v24H0z" fill="#fff">
                                            </path>
                                            </clipPath>
                                            </defs>
                                            </g>
                </svg>
               ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block" >
                  
                        <path fill="#e7e9ea" d="M2.205 7.423L11.745 21h4.241L6.446 7.423H2.204zm4.237 7.541L2.2 21h4.243l2.12-3.017-2.121-3.02zM16.957 0L9.624 10.435l2.122 3.02L21.2 0h-4.243zm.767 6.456V21H21.2V1.51l-3.476 4.946z" />
                        
                            
                </svg>
               )
            }
    },
    {
        path: '/locations',
        title:'Yer İşaretleri',
        
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                     
                     <path fill="#fff" d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path>
               
                
                </svg>
               ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                      
                 <path fill="#e7e9ea" d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                
                </svg>
               )
            }
    },
    {
        path: '/jobs',
        title:'Jobs',
        
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                 
                        <path fill="#fff" d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z" />
                            
                </svg>
               ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                 
                        <path fill="#e7e9ea" d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z" />
                            
                </svg>
               )
            }
    },
    {
        path: '/community',
        title:'Topluluklar',
        
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block" >
                   
                        <path fill="#e7e9ea" d="M7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-1.608 1.732-2.762 4.389-2.869 8.248l-.03 1.083zM9.616 9.27C10.452 8.63 11 7.632 11 6.5 11 4.57 9.433 3 7.5 3S4 4.57 4 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73zm6.884 1.726c-3.264 0-6.816 2.358-7 8.977L9.471 21h14.057l-.029-1.027c-.184-6.618-3.736-8.977-7-8.977zm2.116-1.726C19.452 8.63 20 7.632 20 6.5 20 4.57 18.433 3 16.5 3S13 4.57 13 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73z"/>
                </svg>
               ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block" >
                   
                        <path fill="#e7e9ea" d="M7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-1.608 1.732-2.762 4.389-2.869 8.248l-.03 1.083zM9.616 9.27C10.452 8.63 11 7.632 11 6.5 11 4.57 9.433 3 7.5 3S4 4.57 4 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73zm6.884 1.726c-3.264 0-6.816 2.358-7 8.977L9.471 21h14.057l-.029-1.027c-.184-6.618-3.736-8.977-7-8.977zm2.116-1.726C19.452 8.63 20 7.632 20 6.5 20 4.57 18.433 3 16.5 3S13 4.57 13 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73z"/>
                </svg>
               )
            }
    },
    {
        path: '/onaylanmıs',
        title:'Premium',
        
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                     
                     <path fill="#fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
               
                
                </svg>
               ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                           
                    <path fill="#e7e9ea" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                
                </svg>
               )
            }
    },
    {
        path: '/organizations',
        title:'Onaylı Kuruluşlar',
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                  
                    <path fill="#fff" d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"/>
                            
                </svg>
               ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                  
                    <path fill="#fff" d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"/>
                            
                </svg>
               )
            }
    },
    {
        path: () => {
           return `/${store.getState()?.auth?.currenAccount?.username}`
        },
        title:'Profil',
        
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                     
                     <path fill="#fff" d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>               
                
                </svg>
               ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                                   
                    <path fill="#e7e9ea" d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>               

                </svg>
               )
            }
    },
    
    
]

export const topics =[
    {
        title: 'Türkite tarihinde gündemde',
        topic: {
            type: 'tag',
            value: 'DilanPolat',
        }
    },
    {
        title: 'Türkite tarihinde gündemde',
        topic: {
            type: 'query',
            value: 'Starlink'
        },
        postCount: 13770
    },
    {
        title: 'Türkite tarihinde gündemde',
        topic: {
            type: 'tag',
            value: 'ElonMusk',
        }
    },
    {
        title: 'Türkite tarihinde gündemde',
        topic: {
            type: 'query',
            value: 'Tesla'
        },
        postCount: 2783770
    },
    {
        title: 'Türkite tarihinde gündemde',
        topic: {
            type: 'tag',
            value: 'KutaySarı',
        }
    },
]

export const foryours = [
    {
        title: 'Spor · Gündemdekiler',
        value: 'Penaltı',
        postCount: 42853
    },
    {
        title: 'Futbol tarihinde gündemde',
        value: 'Kırmızı',
        postCount:30452
    },
    {
        title: 'Spor · Gündemdekiler',
        value: 'Ertem',
        postCount:3031
    },
    {
        title: 'İstanbul tarihinde gündemde',
        value: 'Şeyda Yılmaz',
        postCount:215334
    },
    {
        title: 'Futbol tarihinde gündemde',
        value: 'Abdulkerim Bardakçı',
        postCount:1907
    },
    {
        title: 'Spor · Gündemdekiler',
        value: 'Çağdaş Atan',
        postCount:14572
    },
    {
        title: 'Spor · Gündemdekiler',
        value: 'Pizza Hut',
        postCount:30782
    },
    {
        title: 'Türk oyuncular · Gündemdekiler',
        value: 'Burcu Biricik',
        postCount: 27255
    },
    {
        title: 'Türkiye tarihinde gündemde',
        value: 'KISLASIZ BEDELLI ASKERLIK',
        postCount:17908
    },
    {
        title: 'Siyaset · Gündemdekiler',
        value: 'ÖcalanKadar SuçluDeğiliz',
        postCount:15674
    },
]


export const gundems = [
    {
        title: '1 · Türkiye tarihinde Gündemdekiler',
        value: 'Edip Akbayram',
        postCount: 42853
    },
    {
        title: '2 · Spor · Gündemdekiler',
        value: '#GSvİBFK',
        postCount:30452
    },
    {
        title: '3 · Türkiye tarihinde Gündemdekiler',
        value: 'Selim İleri',
        postCount:3031
    },
    {
        title: '4 · Türkiye tarihinde Gündemdekiler',
        value: 'kislasiz bedelli askerlik',
        postCount:215334
    },
    {
        title: '5 · Türkiye tarihinde Gündemdekiler',
        value: '$claim',
        postCount:1907
    },
    {
        title: '6 · Türkiye tarihinde Gündemdekiler',
        value: 'kayyımieyhoda adaletsağla',
        postCount:14572
    },
    {
        title: '7 · Türkiye tarihinde Gündemdekiler',
        value: '#Perşembe',
        postCount:30782
    },
    {
        title: '8 · Spor · Gündemdekiler',
        value: 'Batshuayi',
        postCount: 27255
    },
    {
        title: '9 · Beşiktaş J.K. · Gündemdekiler',
        value: 'Çağdaş Atan',
        postCount:17908
    },
    {
        title: '10 · Siyaset · Gündemdekiler',
        value: '#VatandaşKademeBekliyor',
        postCount:15674
    },
    {
        title: '11 · Türkiye tarihinde Gündemdekiler',
        value: 'Los Angeles',
        postCount:30782
    },
    {
        title: '12 · Türkiye tarihinde Gündemdekiler',
        value: 'Demine',
        postCount:70782
        
    },
    {
        title: '13 · Türkiye tarihinde Gündemdekiler',
        value: 'nusaybin iyovexdijital',
        postCount:92782
        
    },
    {
        title: '14 · Spor · Gündemdekiler',
        value: 'Ali Koç',
        postCount:30782
        
    },

]

export const news = [
    {
        title: 'Siyaset tarihinde gündemde',
        value: 'GenelAf Gerçekleri',
        postCount: 11283
    },
    {
        title: 'Siyaset tarihinde gündemde',
        value: 'AK Parti Diyarbakır 8',
        postCount: 3821
    },
    {
        title: 'Siyaset tarihinde gündemde',
        value: 'AdıAKParti',
        postCount:5781
    },
    {
        title: 'Teknoloji tarihinde gündemde',
        value: 'Zuckerberg',
        postCount: 477081
    },
    {
        title: 'Siyaset tarihinde gündemde',
        value: '#EngelliÖgretmenleriDuyanVarmı',
        postCount:1907
    },
    {
        title: 'İş dünyası ve finans tarihinde gündemde',
        value: '#RCADE',
        postCount:87091
    },
    {
        title: 'Siyaset tarihinde gündemde',
        value: 'Umudun',
        postCount:5322
    },
    {
        title: 'Siyaset tarihinde gündemde',
        value: '#KartınRenginiKademeBelirler',
        postCount: 36701
    },
]

export const sports = [
    {
        title: 'Spor tarihinde gündemde',
        value: 'Fatih Altaylı',
        postCount: 18783
    },
    {
        title: 'Spor tarihinde gündemde',
        value: 'Onur',
        postCount: 3821
    },
    {
        title: 'Spor tarihinde gündemde',
        value: 'Amedspor',
        postCount:2211
    },
    {
        title: 'Spor tarihinde gündemde',
        value: 'Müsavat Dervişoğlu',
        postCount: 8222
    },
    {
        title: 'Spor tarihinde gündemde',
        value: 'Şener Şen',
        postCount: 9192
    },
    {
        title: 'Spor tarihinde gündemde',
        value: 'Bodrum FK',
        postCount:2173
    },
    {
        title: 'Spor tarihinde gündemde',
        value: '#KaraborsaSaray',
        postCount: 7838
    },
    {
        title: 'Spor tarihinde gündemde',
        value: 'Ankaragücü',
        postCount: 1506
    },
    {
        title: 'Spor tarihinde gündemde',
        value: '#BeşiktaşınMaçıVar',
        postCount: 3751
    },
    {
        title: 'Spor tarihinde gündemde',
        value: 'Ahmet Çalık',
        postCount: 11721
    },
    {
        title: 'Spor tarihinde gündemde',
        value: 'Juventus',
        postCount: 21783
    },
    {
        title: 'Spor tarihinde gündemde',
        value: '#BJKvBDR',
        postCount: 2953
    },
]