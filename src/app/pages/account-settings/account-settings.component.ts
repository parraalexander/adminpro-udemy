import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
  }

  cambiarStyle (style : string, selector: any){
    this.settingService.agregarStyle(style);
 
  }


}
