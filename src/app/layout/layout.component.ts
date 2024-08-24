// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Project {
  name: string;
  company: string;
  author: string;
  status: string;
}

@Component({
  selector: 'app-layout',
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true
})
export class LayoutComponent {
  displayedColumns: string[] = ['name', 'company', 'author', 'status', 'action'];
  projects: Project[] = [
    { name: 'Project Apollo', company: 'Lechters Real Estate', author: 'Vanessa Tucker', status: '65%' },
    { name: 'Project Bongo', company: 'Cellophane Transportation', author: 'William Harris', status: '33%' },
    { name: 'Project Canary', company: 'Clemens Insurance', author: 'Sharon Lessman', status: '50%' },
    { name: 'Project Edison', company: 'Affinity Investment Group', author: 'Vanessa Tucker', status: '80%' },
    { name: 'Project Indigo', company: 'Konsili Retail', author: 'Christina Mason', status: '78%' },
  ];
}

// Editinvoice(invoiceno: any) {
//   this.service.editinvoice=invoiceno;
//   this.service.iseditinvoice=true;
//   this.router.navigateByUrl('/editinvoice/' + invoiceno);
//   }