import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { FormsModule } from '@angular/forms';
import { CountryService } from './service/country.service';
import { CustomerService } from './service/customer.service';
import { EventService } from './service/event.service';
import { IconService } from './service/icon.service';
import { NodeService } from './service/node.service';
import { PhotoService } from './service/photo.service';
import { ProductService } from './service/product.service';



@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
