import { NgModule } from '@angular/core';
import { HttpsPipe } from './https/https';
@NgModule({
	declarations: [HttpsPipe],
	imports: [],
	exports: [HttpsPipe]
})
export class PipesModule {}
