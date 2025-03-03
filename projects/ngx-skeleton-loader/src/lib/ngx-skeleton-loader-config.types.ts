import { InjectionToken } from '@angular/core';

export type NgxSkeletonLoaderConfigTheme = {
  // It enforces a combination of `fromRoot` styles with component `styles` attribute
  extendsFromRoot?: boolean;
  // This is required since ngStyle is using `any` as well
  // More details in https://angular.io/api/common/NgStyle
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any;
} | null;

export interface NgxSkeletonLoaderConfig {
  appearance: 'circle' | 'line' | 'custom-content' |'';
  animation: 'progress' | 'progress-dark' | 'pulse' | 'false' | false;
  theme: NgxSkeletonLoaderConfigTheme;
  loadingText: string;
  count: number;
  ariaLabel: string;
}

export const NGX_SKELETON_LOADER_CONFIG = new InjectionToken<NgxSkeletonLoaderConfig>('ngx-skeleton-loader.config');
