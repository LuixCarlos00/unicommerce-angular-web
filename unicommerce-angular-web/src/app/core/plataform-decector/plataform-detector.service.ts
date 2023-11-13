import { Inject, Injectable,PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({providedIn:'root'})
export class plataformDetectorService {

constructor( @Inject (PLATFORM_ID) private plataformID : string){}



isPlataforBrowser(){
return isPlatformBrowser(this.plataformID);
}


isBrowser(): boolean {
    return isPlatformBrowser(this.plataformID);
 }

 isServer(): boolean {
    return !isPlatformBrowser(this.plataformID);
 }

 getPlatform(): string {
    return this.plataformID;
 }

 getUserAgent(): string {
    return this.isBrowser() ? window.navigator.userAgent : "";
 }
 
getAppVersion(): string {
    return this.isBrowser() ? navigator.appVersion : "";

}


}