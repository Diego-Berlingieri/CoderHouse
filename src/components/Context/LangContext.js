
import React, { useState, useEffect } from "react";


export const LangContext = React.createContext();


export default function LangProvider(props) {
  const [lang, setLang] = useState([]);

  useEffect(() => {
    //console.log('LangContext, props.langId: ', props.langId);
    updateLanguageById(props.langId)
  },[props.langId]);


  function updateLanguageById(langId) {
    //console.log('LangContext-updateLanguageById, langId: ', langId);
    new Promise((resolve, reject) => {        
      resolve(
        require('../../assets/languages.json')
      )
    })
    .then((consulta) => {
      var found = consulta.find(
        function (curElement) {
          return curElement.lang === langId;
        }
      );
      if (!found) {
        console.log('Browser language not found. Setting english as default');
        found = consulta.find(
          function (curElement) {
            return curElement.lang === 'en';
          }
        );
      }
      return found
    })
    .then(resultado => setLang(resultado))
    //console.log('LangContext-updateLanguageById, language array: ', lang);
  }


  return (
    <LangContext.Provider value={{ lang, updateLanguageById }}>
      {props.children}
    </LangContext.Provider>
  );
}
export { LangProvider };