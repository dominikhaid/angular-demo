import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    // style({ opacity: '1' }),
    query(':enter, :leave', [
      style({
        opacity: '1',
      }),
    ]),
    query(':enter', [style({ opacity: '1' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ opacity: '0' }))]),
      query(':enter', [animate('300ms ease-out', style({ opacity: '1' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
