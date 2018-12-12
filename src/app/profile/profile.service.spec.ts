import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import {AdapterService} from '../adapter.service';
import {HttpClientModule} from '@angular/common/http';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  // it('should fetch the users profile information', () => {
  //   const service: ProfileService = TestBed.get(ProfileService);
  //   const adapterService: AdapterService = TestBed.get(AdapterService);
  //
  //   /** dummy user **/
  //   const mock_user_accountName = "hd25";
  //   const mock_user_displayName = "HaoDing";
  //   const mock_user_emailAddress = "hd25@rice.edu";
  //   const mock_user_birthday = "1996-4-11";
  //   const mock_user_phoneNumber = "8326419473";
  //   const mock_user_zipCode = "77030";
  //   const mock_user_password = "password-hd25";
  //
  //   /** mock the registration process **/
  //   const profileJson = '{"profile":[' + '{"accountName":"' + "hd25" + '","displayName":"' + "HaoDing" + '","emailAddress":"' + "hd25@rice.edu" + '","birthday":"' + "1996-4-11" + '","phoneNumber":"' + "8326419473" + '","zipCode":"' + "77030" + '","password":"' + "password-hd25" + '"}' + ']}';
  //   adapterService.setJson(profileJson);
  //   const profile = service.getProfileJson();
  //
  //   /** check if fetched info match real info **/
  //   expect(profile.accountName).toBe(mock_user_accountName);
  //   expect(profile.displayName).toBe(mock_user_displayName);
  //   expect(profile.emailAddress).toBe(mock_user_emailAddress);
  //   expect(profile.birthday).toBe(mock_user_birthday);
  //   expect(profile.phoneNumber).toBe(mock_user_phoneNumber);
  //   expect(profile.zipCode).toBe(mock_user_zipCode);
  //   expect(profile.password).toBe(mock_user_password);
  //
  // // it('should be created', () => {
  // //   const service: ProfileService = TestBed.get(ProfileService);
  // //   expect(service).toBeTruthy();
  // // });
  // });
});
