import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { DatabaseMenuItem } from '../../models/databaseMenuItem';
import { MenuService } from '../../services/menu/menu.service';
import { StringService } from '../../services/string/string.service';

const ITEMS_ICON =
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sword</title><path d="M6.92,5H5L14,14L15,13.06M19.96,19.12L19.12,19.96C18.73,20.35 18.1,20.35 17.71,19.96L14.59,16.84L11.91,19.5L10.5,18.09L11.92,16.67L3,7.75V3H7.75L16.67,11.92L18.09,10.5L19.5,11.91L16.83,14.58L19.95,17.7C20.35,18.1 20.35,18.73 19.96,19.12Z" /></svg>
`;

const QUESTS_ICON =
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>script-outline</title><path d="M15,20A1,1 0 0,0 16,19V4H8A1,1 0 0,0 7,5V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V6H20V5A1,1 0 0,0 19,4A1,1 0 0,0 18,5V9L18,19A3,3 0 0,1 15,22H5A3,3 0 0,1 2,19V18H13A2,2 0 0,0 15,20Z" /></svg>
`;

const CLASSES_ICON =
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>shield-sword-outline</title><path d="M12 1L21 5V11C21 16.5 17.2 21.7 12 23C6.8 21.7 3 16.5 3 11V5L12 1M12 3.2L5 6.3V11.2C5 15.5 8.2 20 12 21C15.8 20 19 15.5 19 11.2V6.3L12 3.2M12 5.5L14 7.1L13 13H15V15H13V18H11V15H9V13H11L10 7.1L12 5.5Z" /></svg>
`;

const SKILLS_ICON =
  `
<svg width="512" height="512" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 512 512" fill="currentColor" x="0" y="0" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M496 136s-40.486 85.32-51.442 128.988c-14.33 57.118 2.078 100.297-18.747 155.68c-35.998 64.97-38.435 75.466-169.81 75.33c-48.132-.044-186.02-36.76-186.02-36.76C50.97 454.35 16 457.23 16 435.997c0-21.232 24.88-36.736 46.97-36.787l87.03 7.642c21.14-1.326 43.286-13.71 43.96-41.36c-.353-40.927-4.4-72.357-25.175-105.6l-80.67-125.864c-4.818-10.02-5.964-27.105 7.983-34.732c13.947-7.628 29.793 3.71 35.205 13.582l90.11 122.57c9.618 8.955 26.738 10.68 25.278-8.38L206.903 44.652c-2.478-12.96 4.1-28.654 19.1-28.654c19.687 0 31.795 7.515 31.413 19.413l43.75 179.984c3.42 8.76 15.545 7.59 18.807-.49l12.462-175.022c.64-5.583 7.922-15.314 21.9-13.286c13.976 2.027 22.035 17 20.555 22.793l-4.044 172.936c2.838 15.327 14.888 17.565 24.266 9.008l61.22-109.487c3.72-9.183 18.288-11.096 26.715-7.455c7.84 5.107 12.954 11.96 12.954 21.603z"/></g></svg></svg>
`;

const CODEX_ICON =
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-open-page-variant-outline</title><path d="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z" /></svg>
`;

const CRAFT_ICON =
  `
<svg width="512" height="512" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 24 24" fill="currentColor" x="0" y="0" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M9 5v5c4.03 2.47-.56 4.97-3 6v3h15v-3c-6.41-2.73-3.53-7 1-8V5H9M2 6c.81 2.13 2.42 3.5 5 4V6H2Z"/></g></svg></svg>
`;

const ACHIEVEMENT_ICON =
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trophy-outline</title><path d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M16 11.5C16 13.43 15.42 15 12 15C8.59 15 8 13.43 8 11.5V6H16V11.5M20 11H18V4H20V11Z" /></svg>
`;

const DUNGEON_ICON =
  `
<svg width="512" height="512" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 512 512" fill="currentColor" x="0" y="0" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M476.72 51.375c-5.28 30.185-124.992 107.9-82.47 16.875c-80.216 45.38-107.557 23.42-78.53-5.656c-54.825 2.8-62.753 88.173-55.345 112.406l17.438 19.125c-2.14-31.218.404-48.445 19.5-71.47c13.764 20.614 18.495 33.702 52.062 6.97c-9.393 53.52 54.61 18.747 88.75 10.938c-15.248 14.048-35.153 32.723-38.875 55.468c-1.24 7.587 6.208 17.925 14.125 25.626c-9.443 2.236-41.474 8.91-38.563 26.22c2.912 17.31 12.14 11.885 3.5 15.28c-12.403 2.766-21.156 5.58-39.593-2.187l18.874 20.717c28.39 14.79 73.904 7.306 83.594-14.875c-14.778-1.22-27.125-4.674-33-11.53c44.022-8.34 66.764-39.243 85.78-75.032c-33.638 18.95-42.158 17.784-56 16.313c35.514-14.365 46.876-108.943 38.75-145.188zM246.874 186.063l-56.78 70.125l79.186 86.906l75.095-50l-97.5-107.03zm-62.344 90.125L21.657 467.625l21.438 23.53l205.75-144.374l-64.313-70.592z"/></g></svg></svg>
`;

const GLIDERS_ICON =
  `
  <svg width="512" height="512" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="0" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 512 512" fill="currentColor" x="0" y="0" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M400.565 406.14a19 19 0 1 1 19-19a19 19 0 0 1-19 19zm0 16a35 35 0 0 1-7.16-.74l-2.58 1.31l-.08 18l47.16-24l-10.4-7.22a34.91 34.91 0 0 1-26.94 12.65zm-78.51 35.63l-26.5-100.05l-16.5.35l32.61 123.16l30.61-15.83l-1.39-17.25zm92.66-107.81l-1.4 4.61a34.94 34.94 0 0 1 21.36 40.38l24.77 17.19l16.72-8.07zm-183.25 9.14l7.47 13.13l28.9 5.73l-5.17-19.53zm153.59-3.33l-73 1.59l8.21 31l32.43 6.41l5.64 70.06l16.34-7.77l.22-46.2a34.95 34.95 0 0 1 10.16-55.09zm43.74-52.49l47.34 75.91l-2.79 1.42l13.13 11.26l12.47-6.36l-63.89-102.58zm-245.64-131.62c-11 20.84-45.92 74.64-114.6 78.7l300.28 73zm158.68-48.89c-26.33 36.77-102.7 41.12-137.32 41.12h-5.6l189.06 154.42zm28.22 217.33l-324.78-78.93c-7.22 10.32-18.64 20.11-32.22 29.17v57.5zm-14.05-226.93l49.8 211l88.88-293.4h-17c-28.87 31.7-76.8 76.49-121.68 82.4z"/></g></svg></svg>
`;

const MOUNTS_ICON =
  `
  <svg width="512" height="512" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="0" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 512 512" fill="currentColor" x="0" y="0" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M34.26 54.05c-3.674-.052-7.343.22-11.016.766c.984 18.973 2.226 39.808 8.106 56.516c6.682 18.99 17.358 32.218 42.87 35.504l3.964.51l19.552 28.15c-11.674 19.768-24.757 40.383-27.453 64.24C66.53 277.26 94.98 310.503 94.39 350.273C93.877 384.61 55.533 408.33 18 419.865V494h191.1c5.815-59.63 3.997-142.295 46.45-193.568c-.098-.082-.193-.158-.292-.24c-36.887 13.005-67.608 15.536-91.19 5.884c-7.885-3.227-14.73-7.882-20.49-13.763c-9.234-16.563-10.896-32.02-1.967-42.104c4.063 20.628 13.888 32.91 29.277 39.208c35.125 6.58 61.317.294 87.974-9.633c37.367 28.99 77.208 43.628 120.232 47.863c3.3 19.667 13.757 35.763 30.412 40.163c14.11 3.496 31.643.26 43.44-5.744c17.47-8.89 27.032-33.07 17.07-59.71c-48.152-2.008-100.698-13.49-133.68-42.907c16.136 3.43 33.54 6.376 47.3 8.034c26.324 12.59 51.317 13.888 90.546 17.073c8.062-5.743 13.12-10.632 15.63-14.584c2.774-4.368 3.313-7.532 2.51-12.754c-3.09-11.252-11.807-15.73-21.478-14.93c-15.433-39.633-39.394-82.483-70.715-97.464c-36.225-8.937-73.532 1.93-105.856 11.54c3.448-14.18-1.07-18.407-6.27-28.366c-19.06-19.503-39.63-11.05-57.38-18.498c-14.267-8.968-15.308-35.744-28.94-42.57c-11.082-4.523-26.49-4.93-40.848-1.68c-14.36 3.25-27.51 10.208-34.336 17.787l-4.785 5.312l-6.257-3.46C86.786 69.037 60.437 54.407 34.26 54.048zm16.054 24.41c12.82 1.653 26.336 9.28 38.996 18.04c12.66 8.757 23.642 18.164 29.495 27.225l-15.12 9.767c-2.81-4.348-13.225-14.31-24.617-22.19c-11.392-7.88-24.586-14.155-31.052-14.987zm183.827 80.66c6.545.052 14.645 1.008 28.33 2.614c4.758 1.464 4.267 10.61-2.6 15.733c-26.57 9.943-38.235 14.125-64.15-9.88c20.924-6.123 27.513-8.55 38.42-8.466zm172.116 24.28c20.81 7.5 30.964 29.094 38.154 47.196l-16.75 6.59c-4.683-10.115-13.924-33.156-25.414-36.24z"/></g></svg></svg>
`;

const WS_ICON =
  `
  <svg width="512" height="512" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="0" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 512 512" fill="currentColor" x="0" y="0" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M43.53 15.75c-15.73 0-28.31 12.583-28.31 28.313c0 14.086 10.092 25.644 23.5 27.906L42.687 68L68.81 41.906l2.626-2.625C69.188 25.86 57.63 15.75 43.53 15.75zm33.72 44.125l-17 17c15.885 39.37 43.45 66.684 78.75 87.406a512.629 512.629 0 0 1 25.438-24.936c-22.488-35.103-51.535-62.294-87.188-79.47zM322.594 79.03l-51.25 4.314c-79.356 48.134-143.878 108.1-186.72 186.53l-4.31 51.47l44.155-18.656l-2.94-34.094l-.25-3.063l1.626-2.624c35.94-58.47 79.93-109.41 141.5-141.25l2.406-1.25l2.688.25l34.125 2.906l18.97-44.53zm-62.438 66.376c-10.008 5.886-19.5 12.338-28.562 19.313c46.688 47.93 87.208 108.588 114.72 166.5l11.248 23.717l-23.718-11.28c-57.995-27.554-117.918-67.57-165.688-113.907a497.06 497.06 0 0 0-20.625 29.28c101.918 94.91 227.05 177.304 347.845 234.69c-57.063-120.125-140.038-246.18-235.22-348.314zm-43.03 31.22c-13.37 11.703-25.72 24.58-37.282 38.436c39.36 38.452 88.085 72.83 136.687 98.844c-26.054-48.633-60.754-97.847-99.405-137.28z"/></g></svg></svg>
`;

const OUTFIT_ICON =
  `
  <svg width="512" height="512" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 512 512" fill="currentColor" x="0" y="0" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M196.2 34.57c-7.5 16.07-17.3 39.33-25.7 62.86c-4 11.17-7.6 22.47-10.5 32.77c80.8 26 111.2 26 192 0c-2.9-10.3-6.5-21.6-10.5-32.77c-8.4-23.53-18.2-46.79-25.7-62.86c-26.5 13.22-42.6 20.86-59.8 20.86c-17.2 0-33.3-7.64-59.8-20.86zM32.28 139h-4.94c-1.71 0-2.8.1-3.72.3l-.41.5c-5.12 6.8-6.92 12.6-6.92 17.8c0 5.1 1.9 10.3 6.14 15.9c8.48 11.1 26.73 22.9 50.92 32.5C121.7 225.4 193.1 237.4 256 237.4c62.9 0 134.3-12 182.7-31.4c24.2-9.6 42.4-21.4 50.9-32.5c4.2-5.6 6.1-10.8 6.1-15.9c0-5.2-1.8-11-6.9-17.8l-.4-.5c-2-.3-6-.5-11.4-.2c-11.8.7-29.8 3.2-51.8 6.2c-14.8 2-31.5 4.3-49.5 6.4c.8 5.3 1.3 10.2 1.3 14.7v4.8l-4 2.7c-27.1 18-71.9 25.5-117 25.5c-45.1 0-89.9-7.5-117-25.5l-4-2.7v-4.8c0-4.5.5-9.4 1.3-14.7c-18-2.1-34.7-4.4-49.51-6.4c-22.01-3-40-5.5-51.82-6.2c-.93-.1-1.83-.2-2.69-.1zm123.32 8.6c-1.1 5.2-1.9 9.8-2.3 13.7c22.1 12.5 62.4 20.1 102.7 20.1c40.3 0 80.6-7.6 102.7-20.1c-.4-3.9-1.2-8.5-2.3-13.7c-81.3 25.9-119.5 25.9-200.8 0zM137 265.4c.2 14 1.9 27.4 4.9 40.2c14.5-.4 29.9-3.9 44.9-9.6c8.2-3.2 16.2-7 23.9-11.2c-6.1 1-12.4 1.6-18.7 1.6c-14.7 0-36.1-10.1-55-21zm238 0c-18.9 10.9-40.3 21-55 21c-6.3 0-12.6-.6-18.7-1.6c7.7 4.2 15.7 8 23.9 11.2c15 5.7 30.3 9.2 44.9 9.6c3-12.8 4.7-26.2 4.9-40.2zm-112.1 15.3c1.7 24.1 20.9 41.5 45 58.5c-36.2-5.4-59.3-20.8-68.5-51.2c-13.7 9.7-29.5 18.3-46.2 24.8c-19.2 7.4-39.7 11.7-59.6 10.6c8.3 10.7 15.7 20.5 22.4 29.7c25.2 19.2 45.7 36.8 102.7 45.4c-24 3.7-51.2 6.2-72.5-.9c16 25.8 28.2 65.6 43.3 95.8h53c7.9-15.9 15-45.9 22.3-59.4c-16.6 13.6-34.5 16.6-47.9 15.2c34.1-14.6 53.4-37.4 74-59.6c12.4-19.3 27.3-40.3 47.5-66.2c-19.9 1.1-40.4-3.2-59.6-10.6c-20.9-8.1-40.3-19.6-55.9-32.1zm219 18c-5.5 0-11.7.6-18.6 1.7c-15.7 2.6-34.6 7.7-55.3 14.3l-1 1.3c-12.2 15.3-22.7 28.8-31.8 41.1c15.4 9.5 24.9 20.3 35 30.9c-14.5-5.7-27.4-11.7-45.4-16.6c-5.1 7.2-9.8 14-14.1 20.5c9.6 3.7 19.9 6.7 30.8 9.3c26.9 6.5 56 10.1 81.5 16.6c-18-27.2-43.4-55.2-74.3-77c20.1-4.1 40.6-8.6 58.7-14.9c19.9-6.9 35.9-15.8 45.2-26.5c-1.8-.2-3.4-.5-5.4-.6c-1.7-.1-3.4-.1-5.3-.1z"/></g></svg></svg>
`;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  search: string | null = null;
  languages: string[] = ["English", "Português"];
  databaseMenuItems: DatabaseMenuItem[] =
    [
      {
        description: 'Items',
        icon: 'items_icon',
        route: 'db/items'
      },
      {
        description: 'Quests',
        icon: 'quests_icon',
        route: 'db/quests'
      },
      {
        description: 'Classes',
        icon: 'classes_icon',
        route: 'db/classes'
      },
      {
        description: 'Skills',
        icon: 'skills_icon',
        route: 'db/skills'
      },
      {
        description: 'Codex',
        icon: 'codex_icon',
        route: 'db/codex'
      },
      {
        description: 'Craft',
        icon: 'craft_icon',
        route: 'db/craft'
      },
      {
        description: 'Achieve',
        icon: 'achieve_icon',
        route: 'db/achievements'
      },
      {
        description: 'Dungeon',
        icon: 'dungeon_icon',
        route: 'db/dungeons'
      }
    ];
  selectedMenuItem: string | null = null;
  selectedLanguage = "English";

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _router: Router,
    private _menuService: MenuService,
    private _stringService: StringService
  ) {
    _iconRegistry.addSvgIconLiteral('items_icon', _sanitizer.bypassSecurityTrustHtml(ITEMS_ICON));
    _iconRegistry.addSvgIconLiteral('quests_icon', _sanitizer.bypassSecurityTrustHtml(QUESTS_ICON));
    _iconRegistry.addSvgIconLiteral('classes_icon', _sanitizer.bypassSecurityTrustHtml(CLASSES_ICON));
    _iconRegistry.addSvgIconLiteral('skills_icon', _sanitizer.bypassSecurityTrustHtml(SKILLS_ICON));
    _iconRegistry.addSvgIconLiteral('codex_icon', _sanitizer.bypassSecurityTrustHtml(CODEX_ICON));
    _iconRegistry.addSvgIconLiteral('craft_icon', _sanitizer.bypassSecurityTrustHtml(CRAFT_ICON));
    _iconRegistry.addSvgIconLiteral('achieve_icon', _sanitizer.bypassSecurityTrustHtml(ACHIEVEMENT_ICON));
    _iconRegistry.addSvgIconLiteral('dungeon_icon', _sanitizer.bypassSecurityTrustHtml(DUNGEON_ICON));
    _iconRegistry.addSvgIconLiteral('gliders_icon', _sanitizer.bypassSecurityTrustHtml(GLIDERS_ICON));
    _iconRegistry.addSvgIconLiteral('mounts_icon', _sanitizer.bypassSecurityTrustHtml(MOUNTS_ICON));
    _iconRegistry.addSvgIconLiteral('ws_icon', _sanitizer.bypassSecurityTrustHtml(WS_ICON));
    _iconRegistry.addSvgIconLiteral('outfit_icon', _sanitizer.bypassSecurityTrustHtml(OUTFIT_ICON));

    this._menuService.selectedItem.subscribe(g => this.selectedMenuItem = g);

    /* necessary to subscribe because router finishes loading after page rendered */
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.selectedMenuItem === null) {
          this.selectedMenuItem = _stringService.toFirstLetterUpperCase(this._router.url.split('/')[2]);
        }
      }
    });
  }

  goTo(item: DatabaseMenuItem | null) {
    this._menuService.setSelectedItem(this.selectedMenuItem = item?.description || null);
    this._router.navigate([`/${item ? item.route : ''}`]);
  }
}
