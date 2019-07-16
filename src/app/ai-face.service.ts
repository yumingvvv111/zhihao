import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AiFaceService {

  constructor(public http: HttpClient) { }

  ajax$(config) {
    // let {url, method, type, dataType, data, success, error, crossDomain, cache, contentType, processData, dataType, headers, } = config;
    let newConfig = { ...config };
    Object.keys(newConfig).forEach(key => {
      if (newConfig[key] === undefined) {
        delete newConfig[key];
      }
    });
    console.log(1111, newConfig);
    $.ajax(newConfig);
  }


  sendRequest(config: any) {
    let params = new HttpParams();
    let headers = new HttpHeaders();
    let paramsObj = config && config.data || {};
    let headersObj = config && config.headers || {};
    let method = config && config.method || 'GET';
    let body = config && config.body || {};
    let url = config && config.url;
    for (let name in paramsObj) {
      params = params.set(name, paramsObj[name]);
    }

    for (let name in headersObj) {
      headers = headers.set(name, headersObj[name]);
    }
   
    this.http.request(
      method,
      url,
      {
        responseType: "json",
        params,
        headers,
        body
      })
      .subscribe(
        val => {
          console.log("call success", val);
          config && config.success && config.success(val)
        },
        ex => {
          console.log("call in error", ex);
          config && config.error && config.error(ex);
        },
        () => {
          console.log("observable is now completed.");
        }
      );
  }

  postPhoto(params: any) {
    return new Promise((resolve, reject) => {
      this.ajax$({
        url: params.url,//'http://192.168.1.112:3000/api/handlePhoto',
        // url: 'http://172.27.0.66:8899/get_name_base64/',
        crossDomain: true,
        cache: false,
        method: 'POST',
        // processData: false,
        // dataType: 'json',
        // mimeType: "multipart/form-data",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          'Access-Control-Allow-Origin': '*'
        },
        data: params.data,
        success: function (res) {
          console.log('send photo success', res);
          resolve(res);
        },
        error: function (ex) {
          console.log(ex);
          reject(ex);
        }
      });
    });
  }
}
