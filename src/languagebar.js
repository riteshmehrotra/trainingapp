import React,{useState} from 'react';
import { Badge } from 'react-bootstrap';



const LanguageBar = (props) => {
    let {languages, onChange} = props;
    let [selectedLanguage, selectedLanguageChange] = useState("EN");
    let languageBadges =  languages.map(lang=> <Badge key={lang} style={{cursor:"pointer"}} variant={getClass(lang, selectedLanguage)} onClick={()=>{selectedLanguageChange(lang); onChange(lang);}} >{lang}</Badge>);
    return <h5>{languageBadges}</h5>
}


const getClass=(language, selected)=>language===selected?"primary":"secondary";


export default LanguageBar;