import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './Certifications.module.css';

type Certification = {
  fileName: string;
  name: string;
  credentialUrl: string;
};

export const certifications: Certification[] = [
  {
    fileName: 'aws-cloud-practitioner.webp',
    name: 'AWS Certified Cloud Practitioner',
    credentialUrl: 'https://www.credly.com/badges/a7e6b0f7-ce2a-431d-8f9f-17bad4a0cb4d/public_url',
  },
  {
    fileName: 'aws-ai-practitioner.webp',
    name: 'AWS Certified AI Practitioner',
    credentialUrl: 'https://www.credly.com/badges/c1b34cd6-b40c-4598-b55b-33d6f8e912ad/',
  },
  {
    fileName: 'aws-solutions-architect-associate.webp',
    name: 'AWS Certified Solutions Architect – Associate',
    credentialUrl: 'https://www.credly.com/badges/76e54db6-2054-4d2d-994e-c20c3d94f73f/public_url',
  },
  {
    fileName: 'aws-developer-associate.webp',
    name: 'AWS Certified Developer – Associate',
    credentialUrl: 'https://www.credly.com/badges/265aaa13-c646-4f5a-afc8-aafc1ea9faed/public_url',
  },
  {
    fileName: 'aws-sysops-administrator-associate.webp',
    name: 'AWS Certified SysOps Administrator – Associate',
    credentialUrl: 'https://www.credly.com/badges/b129d101-d04d-4a18-a2d1-57c68e309380/public_url',
  },
  {
    fileName: 'aws-machine-learning-engineer-associate.webp',
    name: 'AWS Certified Machine Learning Engineer – Associate',
    credentialUrl: 'https://www.credly.com/badges/e775fcef-d493-49bf-bbd2-507c45b8bd0a',
  },
  {
    fileName: 'aws-solutions-architect-professional.webp',
    name: 'AWS Certified Solutions Architect – Professional',
    credentialUrl: 'https://www.credly.com/badges/aec5d603-abb7-428f-a6ff-85fd7084b463/public_url',
  },
  {
    fileName: 'aws-devops-engineer-professional.webp',
    name: 'AWS Certified DevOps Engineer – Professional',
    credentialUrl: 'https://www.credly.com/badges/b2c78c78-6553-4d7b-a86a-1eab958ee914/public_url',
  },
  {
    fileName: 'aws-security-specialty.webp',
    name: 'AWS Certified Security – Specialty',
    credentialUrl: 'https://www.credly.com/badges/ea88b2c5-4b24-4a7b-a994-98b584ef6cf6',
  },
  {
    fileName: 'azure-fundamentals.webp',
    name: 'Microsoft Certified: Azure Fundamentals',
    credentialUrl: 'https://www.credly.com/badges/ca27c82b-a97a-4cf1-b983-d59f521dc324/public_url',
  },
  {
    fileName: 'azure-developer-associate.webp',
    name: 'Microsoft Certified: Azure Developer Associate',
    credentialUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/scottie-enriquez/22C747278A56F6D0?sharingId=CC24E71FCD34FD03',
  },
  {
    fileName: 'azure-administrator-associate.webp',
    name: 'Microsoft Certified: Azure Administrator Associate',
    credentialUrl: 'https://learn.microsoft.com/en-us/users/scottie-enriquez/credentials/696d4be304a2844e',
  },
  {
    fileName: 'azure-solutions-architect-expert.webp',
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    credentialUrl: 'https://learn.microsoft.com/en-us/users/scottie-enriquez/credentials/8df39e881340424b',
  },
  {
    fileName: 'google-cloud-associate-cloud-engineer.webp',
    name: 'Google Cloud Certified – Associate Cloud Engineer',
    credentialUrl: 'https://www.credly.com/badges/7f20f1df-2541-4336-9f64-9f6c33a3750b/public_url',
  },
  {
    fileName: 'terraform-associate.webp',
    name: 'HashiCorp Certified: Terraform Associate',
    credentialUrl: 'https://www.credly.com/badges/682c12b3-a38f-411c-90b2-084070edb59c/public_url',
  },
  {
    fileName: 'cncf-certified-kubernetes-application-developer.webp',
    name: 'Certified Kubernetes Application Developer (CKAD)',
    credentialUrl: 'https://www.credly.com/badges/242c922d-debd-4848-b565-984424596696/public_url',
  },
];

export default function Certifications(): ReactNode {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <section className={styles.section} aria-labelledby="certificationsHeading">
      <h2 id="certificationsHeading" className={styles.heading}>
        active certifications
      </h2>
      <ul className={styles.grid}>
        {certifications.map((certification) => (
          <li key={certification.fileName} className={styles.badge}>
            <Link
              to={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={certification.name}
            >
              <img
                src={withBaseUrl(`/img/certifications/${certification.fileName}`)}
                alt={certification.name}
                title={certification.name}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
