import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Christmas Radio en directo",
            artist: "ChristmasRadiodirecto",
            cover: "https://img.freepik.com/psd-gratis/maqueta-microfono-escritorio-rectangular-vista-frontal_1332-10597.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://radio1.streamserver.link:8070/hcr-aac-hq",
            active: true,
        },
        {
            name:"The Christmas Station",
            artist: "TheChristmasStation",
            cover: "https://img.freepik.com/vector-gratis/concepto-marco-neon-aire_52683-52393.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://kathy.torontocast.com:1635/stream",
            active: false,
        },
        {
            name:"Christmas Hits",
            artist: "ChristmasHits",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41309.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://strw1.openstream.co/655?aw_0_1st.collectionid%3D4169%26stationId%3D4169%26publisherId%3D679%26k%3D1690930905",
            active: false,
        },
        {
            name:"Christmas Songs Radio",
            artist: "ChristmasSongsRadio",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41314.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://cheetah.streemlion.com:1050/stream",
            active: false,
        },
        {
            name:"The Christian Mix",
            artist: "TheChristianMix",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://ssl-proxy.icastcenter.com/get.php?type=Icecast&server=199.180.72.2&port=10572&mount=stream&data=mp3",
            active: false,
        },
        {
            name:"The Power Station",
            artist: "ThePowerStation",
            cover: "https://img.freepik.com/psd-gratis/maqueta-microfono-escritorio-rectangular-vista-frontal_1332-10597.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://securestreams.reliastream.com:1072/hd",
            active: false,
        },
        {
            name:"KTIS 98.5 FM",
            artist: "KTIS98.5FM",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://nwm.streamguys1.com/ktis-fm-1",
            active: false,
        },
        {
            name:"Radio North Pole",
            artist: "RadioNorthPole",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://streaming.radiostreamlive.com/radionorthpole_devices?token=%3C?%20echo%20rand%20(1,200000);%20?%3E",
            active: false,
        },
        {
            name:"My Worship FM Radio",
            artist: "MyWorshipFMRadio",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://19293.live.streamtheworld.com/SP_R2796427_SC?dist=onlineradiobox",
            active: false,
        },
    ];
}

export default chillHop;


