import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

// A separate file to maintain all the routes in a single file

const appRoutes: Routes = [
    {
      path: '',
      component : HomeComponent,
      pathMatch : 'full' //generally used with redirectTo
    },
    {
      path: 'users',
      component : UsersComponent,
      children : [
        {
          path: ':id/:name',
          component : UserComponent
        },
      ]
    },
    
    {
      path: 'servers',
      //canActivate:[AuthGuard],
      canActivateChild:[AuthGuard], //used to protect child routes
      component : ServersComponent, children : [
        {
          path: ':id',component : ServerComponent,resolve:{server:ServerResolver}
        },
        {
          path: ':id/edit',component : EditServerComponent, canDeactivate : [CanDeactivateGuard]
        }
      ]
    },
  
    // {
    //   path: 'not-found', component : PageNotFoundComponent
    // },
    {
      path: 'not-found', component : ErrorPageComponent, data : {message:"Page not found"}
    },
    // ** is the wild card route which catches every route which is not registered in this fie
    // this wild card route need to be at the last position of the array else it will always redirect to the not-found
    {
      path: '**',redirectTo : '/not-found' 
    }
   
  ]
  


@NgModule({
    imports : [
        //RouterModule.forRoot(appRoutes,{useHash:true}) used as a location strategy for understanding of server
        RouterModule.forRoot(appRoutes)
    ],
    exports : [
        RouterModule    //importing our AppRoutingModule in other file, will give access to the RouterModuloe in this file
    ]
})
export class AppRoutingModule{

}