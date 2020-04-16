import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';
import { ExampleTempModule } from '../../Templates/example-temp/example-temp.module';
import { ExampleTemp2Module } from '../../Templates/example-temp2/example-temp2.module';
import { ExampleOrgModule } from '../../organisms/example-org/example-org.module';
import { ExampleOrg2Module } from '../../organisms/example-org2/example-org2.module';
import { ExampleOrg3Module } from '../../organisms/example-org3/example-org3.module';


@NgModule({
  declarations: [
    Page1Component
  ],
  exports: [
    Page1Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule,
    ExampleTempModule,
    ExampleOrgModule,
    ExampleOrg2Module,
    ExampleTemp2Module,
    ExampleOrg3Module
  ]
})
export class Page1Module { }
