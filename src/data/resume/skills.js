const skills = [
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Cloud'],
  },
  {
    title: 'Microsoft Azure',
    competency: 4,
    category: ['Cloud'],
  },
  {
    title: 'Digital Ocean',
    competency: 4,
    category: ['Cloud'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'EC2',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'S3',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'SNS',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'SES',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'CloudFront',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'CloudWatch',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'Lambda',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'RDS',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'Route53',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'IAM',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'ACM',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'CloudFormation',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'CloudTrail',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'VPC',
    competancy: 4,
    category: ['AWS'],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['CI/CD'],
  },
  {
    title: 'Azure DevOps',
    competency: 4,
    category: ['CI/CD'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Scripting', 'CI/CD'],
  },
  {
    title: 'Powershell',
    competency: 2,
    category: ['Scripting', 'CI/CD'],
  },
  {
    title: 'Git',
    competency: 2,
    category: ['Version Control'],
  },
  {
    title: 'BitBucket',
    competency: 2,
    category: ['Version Control'],
  },
  {
    title: 'Azure Repos',
    competency: 2,
    category: ['Version Control'],
  },
  {
    title: 'ARM Templates',
    competency: 2,
    category: ['Infrastructure-As-Code'],
  },
  {
    title: 'Terraform',
    competency: 2,
    category: ['Infrastructure-As-Code'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Virtualization'],
  },
  {
    title: 'VirtualBox',
    competency: 2,
    category: ['Virtualization'],
  },
  {
    title: 'Windows Server',
    competency: 2,
    category: ['Virtualization'],
  },
  {
    title: 'Nginx',
    competency: 3,
    category: ['Web Server'],
  },
  {
    title: 'Apache Http Server',
    competency: 3,
    category: ['Web Server'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Server'],
  },
  {
    title: 'IIS',
    competency: 3,
    category: ['Web Server'],
  },
  {
    title: 'Tomcat',
    competency: 3,
    category: ['Web Server'],
  },
  {
    title: 'Elastic Search',
    competency: 1,
    category: ['Logging Tools'],
  },
  {
    title: 'Fluentd',
    competency: 1,
    category: ['Logging Tools'],
  },
  {
    title: 'Kubetail',
    competency: 3,
    category: ['Logging Tools'],
  },
  {
    title: 'azure log diagnostics',
    competency: 3,
    category: ['Logging Tools'],
  },
  {
    title: 'Portainer',
    competency: 4,
    category: ['Docker Tools'],
  },
  {
    title: 'Turtle Race',
    competency: 3,
    category: ['Docker Tools'],
  },
  {
    title: 'Docker Compose',
    competency: 3,
    category: ['Docker Tools'],
  },
  {
    title: 'Helm',
    competency: 2,
    category: ['Kubernetes tools'],
  },
  {
    title: 'Kubernetes Dashboard',
    competency: 4,
    category: ['Kubernetes tools'],
  },
  {
    title: 'Heptio',
    competency: 4,
    category: ['Kubernetes tools'],
  },
  {
    title: 'Cabin',
    competency: 4,
    category: ['Kubernetes tools'],
  },
  {
    title: 'k9s',
    competency: 4,
    category: ['Kubernetes tools'],
  },
  {
    title: 'Ubuntu',
    competency: 2,
    category: ['OS'],
  },
  {
    title: 'Windows-Server 2012',
    competency: 2,
    category: ['OS'],
  },
  {
    title: 'Alpine',
    competency: 2,
    category: ['OS'],
  },
  {
    title: 'Amazon Linux AMI',
    competency: 2,
    category: ['OS'],
  },
  {
    title: 'GKE',
    competency: 2,
    category: ['GCP'],
  },
  {
    title: 'GCR',
    competency: 2,
    category: ['GCP'],
  },
  {
    title: 'Compute Engine',
    competency: 2,
    category: ['GCP'],
  },
  {
    title: 'Driver Logging',
    competency: 2,
    category: ['GCP'],
  },
  {
    title: 'Vm',
    competency: 2,
    category: ['Azure'],
  },
  {
    title: 'App-Service',
    competency: 2,
    category: ['Azure'],
  },
  {
    title: 'KeyVault',
    competency: 2,
    category: ['Azure'],
  },
  {
    title: 'Storage account',
    competency: 2,
    category: ['Azure'],
  },
  {
    title: 'Classic-Cloudservice',
    competency: 2,
    category: ['Azure'],
  },
  {
    title: 'Container instances',
    competency: 2,
    category: ['Azure'],
  },
  {
    title: 'ACR',
    competency: 2,
    category: ['Azure'],
  },
  {
    title: 'ActiveDirectory',
    competency: 2,
    category: ['Azure'],
  },
  {
    title: 'Droplet',
    competency: 2,
    category: ['Digital Ocean'],
  },
  {
    title: 'Networking',
    competency: 2,
    category: ['Digital Ocean'],
  },
  {
    title: 'Kubernetes Cluster',
    competency: 2,
    category: ['Digital Ocean'],
  },
  {
    title: 'Rapid SSL',
    competency: 2,
    category: ['SSL Providers'],
  },
  {
    title: 'Comodo Rsa',
    competency: 2,
    category: ['SSL Providers'],
  },
  {
    title: 'Go Daddy',
    competency: 2,
    category: ['SSL Providers'],
  },
  {
    title: 'Lets Encrypt',
    competency: 2,
    category: ['SSL Providers'],
  },
  {
    title: 'Cert-Bot',
    competency: 2,
    category: ['SSL Providers'],
  },
  {
    title: 'MySql',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'MongoDb',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Sql Server',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Istio',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
  {
    title: 'npm',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
  {
    title: 'Jmeter',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
  {
    title: 'Mvn',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
  {
    title: 'Amazon Aurora',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
  {
    title: 'LightSail',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
  {
    title: 'NFS',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
  {
    title: 'PM1',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
  {
    title: 'JFrog',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
  {
    title: 'G-Suite',
    competency: 1,
    category: ['Exposure (miscellaneous)'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
