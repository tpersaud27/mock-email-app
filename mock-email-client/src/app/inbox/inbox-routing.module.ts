import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailViewPlaceholderComponent } from './email-view-placeholder/email-view-placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';

const routes: Routes = [
  // Show the homeComponent and inside of there we show the placeholderComponent or emailShowComponent
  {
    path: '',
    component: InboxHomeComponent,
    children: [
      {
        path: ':id',
        component: EmailShowComponent,
      },
      {
        path: '',
        component: EmailViewPlaceholderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
