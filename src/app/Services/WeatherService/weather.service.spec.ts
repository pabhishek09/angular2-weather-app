import { WeatherService } from './weather.service';
import { Observable } from 'rxjs/Rx'; 
import { Http, RequestOptions, ConnectionBackend, BaseRequestOptions} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ReflectiveInjector } from '@angular/core';



describe("Weather service", () => {
       
    beforeEach(() => {
      this.injector = ReflectiveInjector.resolveAndCreate([
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
        Http, WeatherService,
      ]);
      this.weatherService = this.injector.get(WeatherService);
      this.backend = this.injector.get(ConnectionBackend) as MockBackend;
      this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
    });

     it('getWeatherDetails method should query current service url', () => {
      this.weatherService.getWeatherDetails();
      expect(this.lastConnection).toBeDefined('no http service connection at all?');
      expect(this.lastConnection.request.url).toEqual(this.WeatherService.weatherApiUrl);
    });
    
});
