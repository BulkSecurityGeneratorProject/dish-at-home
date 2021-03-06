import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DishAtHomeSharedModule } from 'app/shared';
import {
    OrderPreparationComponent,
    OrderPreparationDetailComponent,
    OrderPreparationUpdateComponent,
    OrderPreparationDeletePopupComponent,
    OrderPreparationDeleteDialogComponent,
    orderPreparationRoute,
    orderPreparationPopupRoute
} from './';

const ENTITY_STATES = [...orderPreparationRoute, ...orderPreparationPopupRoute];

@NgModule({
    imports: [DishAtHomeSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        OrderPreparationComponent,
        OrderPreparationDetailComponent,
        OrderPreparationUpdateComponent,
        OrderPreparationDeleteDialogComponent,
        OrderPreparationDeletePopupComponent
    ],
    entryComponents: [
        OrderPreparationComponent,
        OrderPreparationUpdateComponent,
        OrderPreparationDeleteDialogComponent,
        OrderPreparationDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DishAtHomeOrderPreparationModule {}
