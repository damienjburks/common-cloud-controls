# Relational Database Management Systems Threats

Thi document contains the most common list of threats that impacts cloud-native relational database management systems (RDBMS). The scope of these threats expand across cloud service providers.

## Threats Catalog

| Threat ID | Name | Description | Service Taxonomy Id | MITRE ATT&CK TTPs |
|-----------|------|-------------|---------------------|---------------------|
| CCC.RDMS.T1 | Unauthorized Access to Database | An threat actor gains unauthorized access to the cloud relational database by using a compromised role or using default administrative credentials. | [CCC-RDMS-9](./taxonomy.md/#CCC-RDMS-9) | [TA0006](https://attack.mitre.org/tactics/TA0006/), [T1552](https://attack.mitre.org/techniques/T1552/) |
| CCC.RDMS.T2 | Unauthorized Cross Organization Snapshot Collection | An threat actor initiates an snapshot collection activity using a privileged role and copies the snapshot outside of the organization, which allows for data exflitration and theft. | [CCC-RDMS-5](./taxonomy.md/#CCC-RDMS-5) | [TA0009](https://attack.mitre.org/tactics/TA0009/), [T1530](https://attack.mitre.org/techniques/T1530/) |
| CCC.RDMS.T3 | Disabled Logging & Monitoring | An threat actor can disable the logging and monitoring of the relational database, which allows for evasion techniques and activites to take place. In addition, this removes traces of malicious actions performed on the system. | [CCC-RDMS-11](./taxonomy.md/#CCC-RDMS-11), [CCC-RDMS-10](./taxonomy.md/#CCC-RDMS-10) | [TA0005](https://attack.mitre.org/tactics/TA0005/), [T1562](https://attack.mitre.org/techniques/T1562/)|
| CCC.RDMS.T4 | Unauthorized Configuration Modification | An threat actor attempts to make a change to the configuration of the cloud RDMS with a malicious role. | [CCC-RDMS-5](./taxonomy.md/#CCC-RDMS-5) | [TA0004](https://attack.mitre.org/tactics/TA0004), [TA0005](https://attack.mitre.org/tactics/TA0005), [T1548](https://attack.mitre.org/techniques/T1548/) |
| CCC.RDMS.T5 | Unencrypted Connection To Database | An end-user connects to the database over HTTP, which is susceptible to network sniffing attacks and various other exploits. | [CCC-RDMS-8](./taxonomy.md/#CCC-RDMS-8) | [TA0006](https://attack.mitre.org/tactics/TA0006), [TA0007](https://attack.mitre.org/tactics/TA0007), [T1040](https://attack.mitre.org/techniques/T1040/) |
| CCC.RDMS.T6 | Snapshot Collection with Unauthorized Encryption Key | An threat actor attempts to perform snapshot collection with the non-default encryption key that is associated with the RDMS. | [CCC-RDMS-7](./taxonomy.md/#CCC-RDMS-7) | [TA0009](https://attack.mitre.org/tactics/TA0009), [T1530](https://attack.mitre.org/techniques/T1530/) |

<a id="CCC-RDMS-T1"></a>
<a id="CCC-RDMS-T2"></a>
<a id="CCC-RDMS-T3"></a>
<a id="CCC-RDMS-T4"></a>
<a id="CCC-RDMS-T5"></a>
<a id="CCC-RDMS-T6"></a>