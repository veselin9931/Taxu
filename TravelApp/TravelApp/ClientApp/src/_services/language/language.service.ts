import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LNG_KEY = 'SELECTED LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {
  selected= "";

  constructor(private translate: TranslateService, private storage: Storage) { }

  setInitialAppLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {
      if(val){
        this.setLanguage(val);
        this.selected = val;
      }
    })
  }

  getLanguages() {
    return [
      {text: 'English', value: 'en', img:''},
      {text: 'Spanish', value: 'es', img:''}
    ]
  }

  setLanguage(lng){
    this.translate.use('lng');
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
