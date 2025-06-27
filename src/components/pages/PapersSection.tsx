"use client";
import { motion } from "framer-motion";
import { Box, Container, Typography, Paper, Chip, Link } from "@mui/material";
import TypewriterQuote from "../shared/TypewriterQuote";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

const papers = [
  {
    title:
      "Adaptive Access Control for Smart Homes Supported by Zero Trust for User Actions",
    authors: "Giovanni R. da Silva, Aldri L. dos Santos",
    venue: "IEEE Transactions on Network and Service Management",
    year: "2024",
    link: "https://doi.org/10.1109/TNSM.2024.3492379",
    tags: [
      "Zero Trust",
      "Access Control",
      "Adaptive",
      "Smart Home",
      "Privacy",
      "User Actions",
    ],
    abstract:
      "Although smart homes have recently become popular, people are still highly concerned about security, safety, and privacy issues. Particularly, the security system requirements for smart homes should include privacy perception, low latency in response, spatial and temporal locality, resource extensibility, protection against impersonation, resource isolation, access control enforcement, and taking into account the refresh verification with a trustworthy system. In this paper, we propose the ZASH (Zero-Aware Smart Home) system to provide access control for the user's actions on smart devices in smart homes. ZASH is based on continuous authentication leveraged by Zero Trust (ZT), context-aware, and user behavior. We implemented ZASH in the ns-3 network simulator and analyzed its robustness, efficiency, extensibility, and performance. According to our analysis, ZASH protects users' privacy, responds quickly (around 4.16 ms), copes with adding and removing devices, blocks most impersonation attacks (up to 99% with a proper configuration), isolates smart devices, and enforces access control for all interactions.",
  },
  {
    title:
      "Context-aware and User Behavior-based Continuous Authentication for Zero Trust Access Control in Smart Homes",
    authors: "Giovanni R. da Silva, Aldri L. dos Santos",
    venue: "UFPR - Federal University of Paraná",
    year: "2023",
    link: "https://hdl.handle.net/1884/84016",
    tags: [
      "IoT",
      "Authentication",
      "Behavior-Based",
      "Smart Home",
      "Computer Science",
    ],
    abstract:
      "Although smart homes have become popular recently, people are still highly concerned about security, safety, and privacy issues. Studies revealed that issues in people's privacy generate physiological and financial harm because smart homes are intimate living environments. Further, our research disclosed that impersonation attacks are one of the most severe threats against smart homes because they compromise confidentiality, authenticity, integrity, and non-repudiation. Typically, approaches to build security for Smart Home Systems (SHS) require historical data to implement access control and Intrusion Detection Systems (IDS), a vulnerability to the inhabitant's privacy. Additionally, most works rely on cloud computing or resources in the cloud to perform security tasks, which attackers can exploit to target confidentiality, integrity, and availability. Moreover, researchers do not regard the misuse of SHS by forcing users to interact with devices through their smartphones or tablets, as they usually interact by any means, like virtual assistants and devices themselves. Therefore, the security system requirements for smart homes should comprehend privacy perception, low latency in response, spatial and temporal locality, device extensibility, protection against impersonation, device isolation, access control enforcement, and taking into account the refresh verification with a trustworthy system. To attend to those requirements, we propose the ZASH (Zero-Aware Smart Home) system to provide access control for the user's actions on smart devices in smart homes. In contrast to current works, it leverages continuous authentication with the Zero Trust paradigm supported by configured ontologies, real-time context, and user activity. Edge computing and Markov Chain enable ZASH to prevent and mitigate impersonation attacks that aim to compromise users' security. The system relies only on resources inside the house, is self-sufficient, and is less exposed to outside exploitation. Furthermore, it works from day zero without the requirement of historical data, though it counts on that as time passes to monitor the users' behavior. ZASH requires proof of identity for users to confirm their authenticity through strong features of the Something You Are class. The system enforces access control in smart devices, so it does not depend on intermediaries and considers any user-device interaction. At first, an initial test of algorithms with a synthetic dataset demonstrated the system's capability to dynamically adapt to new users' behaviors withal blocking impersonation attacks. Finally, we implemented ZASH in the ns-3 network simulator and analyzed its robustness, efficiency, extensibility, and performance. According to our analysis, it protects users' privacy, responds quickly (around 4.16 ms), copes with adding and removing devices, blocks most impersonation attacks (up to 99% with a proper configuration), isolates smart devices, and enforces access control for all interactions.",
  },
  {
    title:
      "Zero Trust Access Control with Context-Aware and Behavior-Based Continuous Authentication for Smart Homes",
    authors: "Giovanni R. da Silva, Daniel F. Macedo, Aldri L. dos Santos",
    venue:
      "SBSeg 2021 - Brazilian Symposium on Information and Computer System Security",
    year: "2021",
    link: "https://doi.org/10.5753/sbseg.2021.17305",
    tags: [
      "Zero Trust",
      "Continuous Authentication",
      "Context-Aware",
      "Behavior-Based",
      "Smart Home",
      "Edge Computing",
    ],
    abstract:
      "Generally, approaches to build the security of Smart Home Systems (SHS) require big amount of data to implement Access Control and Intrusion Detection Systems, with storage in cloud, for instance, being a vulnerability to inhabitants privacy. Besides, most works rely on cloud computing or resources in the cloud to perform security tasks, what can be exploited by attackers. This work presents the ZASH (Zero-Aware Smart Home System), an Access Control for SHS. ZASH uses Continuous Authentication with Zero Trust, supported by real-time context and activity information, enabled by Edge Computing and Markov Chain, to prevent and mitigate impersonation attacks that aim to invade inhabitants privacy. An experimental evaluation demonstrated the system capability to dynamically adapt to new inhabitants behaviors withal blocking impersonation attacks.",
  },
  {
    title:
      "Coordenação de Múltiplos Eventos Críticos de Saúde Por Redes Dinâmicas de Interesses Sociais",
    authors:
      "Agnaldo De Souza Batista; Giovanni Rosa Da Silva; Michele Nogueira De Lima; Aldri Luis Dos Santos",
    venue:
      "SBRC 2020 - Brazilian Symposium on Computer Network and Distributed Systems",
    year: "2020",
    link: "https://doi.org/10.5753/sbrc.2020.12303",
    tags: [
      "Eventos concorrentes",
      "Disseminação de eventos",
      "Eventos críticos",
      "Redes dinâmicas",
      "Dados pessoais sensíveis",
      "Controle de disseminação",
    ],
    abstract:
      "O atendimento apropriado de múltiplos eventos urbanos críticos depende de uma disseminação coordenada às entidades adequadas e no momento oportuno. Na área de saúde, ambientes estruturados como hospitais, por exemplo, suportam adequadamente a disseminação dos eventos críticos. Contudo, tratar esses eventos é um desafio fora desses ambientes, pois a falta de infraestrutura de rede compromete o serviço. Este artigo apresenta o sistema C-STEALTH para atender eventos críticos de saúde de maneira distribuída, mediante o agrupamento de dispositivos em comunidades através de redes dinâmicas. Essas estratégias oferecem um serviço resiliente à mobilidade das pessoas e às falhas de comunicação, confiabilidade na disseminação dos dados e redução da latência na sua entrega. Simulações no NS-3 mostram que C-STEALTH oferece uma confiabilidade de disseminação de eventos superior a 94% com uma latência de até 166ms e 100% de disponibilidade da rede em alguns casos.",
  },
  {
    title:
      "Coordenação de Eventos Críticos Concorrentes para Suportar Tomadas de Decisão na Disseminação de Dados Pessoais Sensíveis",
    authors:
      "Giovanni Rosa Da Silva; Aldri Luiz Dos Santos; Agnaldo De Souza Batista",
    venue: "UFPR - Federal University of Paraná",
    year: "2020",
    link: "/TCC.pdf",
    tags: [
      "Coordination of Concurrent Critical Events",
      "Sensitive Personal Data Dissemination",
      "SIoT",
      "Communities of Interest",
      "Trust Evaluation",
      "Opportunistic Networks",
    ],
    abstract:
      "The expansion of the Internet has also contributed to the popularization of wireless networks, using the IEEE 802.11 standard. In particular, IoT stands out as a paradigm that encourages the creation of applications with real-world objects connected to the Internet. From the union between concepts of SNs and IoT, a new paradigm called SIoT emerged. With the extraction and processing of social aspects, it is possible to create models to represent complex real-world behaviors. Within complex and opportunistic networks, the formation of communities for device clustering to find some similarity among their owners stands out. Trust evaluation is also a technique used to make decisions in autonomous networks. This work leverages this knowledge to propose a concurrent critical events coordination system for the dissemination of sensitive personal data. The proposal considers opportunistic interactions between devices in order to form communities of interest. During this interaction, a device evaluates trust between it and another device based on the other device's competence and similarity between its sets of interest. In a critical event, the system selects the device that has the highest trust value to disseminate its owner's personal data. The proposal also checks a time frame to ensure that the data receiving device can have the opportunity to act. The system selects another receiver until it vouches for successful dissemination. This assures agile and assertive management in the occurrence of simultaneous and sequential critical events. Results show that the system reached a maximum of 8.1ms to disseminate the data, reaching a success rate of 100% in some cases.",
  },
];

const PapersSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <Box
      component="section"
      id="papers"
      sx={{ pt: { xs: 8, md: 10 }, position: "relative", overflow: "hidden" }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 2,
              fontFamily: "Courier New, monospace",
            }}
          >
            Academic Work
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "text.secondary",
              mx: "auto",
              mb: 6,
              fontFamily: "Courier New, monospace",
            }}
          >
            Publishing knowledge in the Matrix. Each paper is a ripple in the
            digital code.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 4 }}>
            {papers.map((paper, idx) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.1 }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    background:
                      "linear-gradient(135deg, rgba(13, 2, 8, 0.95) 80%, rgba(0,255,65,0.08) 100%)",
                    border: "2px solid #00FF41",
                    boxShadow: "0 0 24px 4px #00FF4177, 0 2px 24px #000",
                    borderRadius: 3,
                    minWidth: 280,
                    width: "100%",
                    mx: "auto",
                    fontFamily: "Courier New, monospace",
                    position: "relative",
                    overflow: "visible",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      boxShadow: "0 0 32px 8px #00FF41CC, 0 2px 32px #000",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#00FF41",
                        fontFamily: "Courier New, monospace",
                        letterSpacing: 1,
                        textShadow: "0 0 8px #00FF41, 0 0 2px #00FF41",
                      }}
                    >
                      <Link
                        href={paper.link}
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                        color="#00FF41"
                      >
                        {paper.title}
                      </Link>
                    </Typography>
                    <IconButton
                      onClick={() => handleToggle(idx)}
                      aria-label={
                        openIndexes.includes(idx)
                          ? "Hide abstract"
                          : "Show abstract"
                      }
                      sx={{
                        color: "#00FF41",
                        ml: 1,
                        transform: openIndexes.includes(idx)
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </Box>
                  <Collapse
                    in={openIndexes.includes(idx)}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box
                      sx={{
                        mt: 2,
                        mb: 1,
                        p: 2,
                        bgcolor: "rgba(0,255,65,0.05)",
                        borderRadius: 2,
                        border: "1px solid #00FF41",
                        color: "#00FF41",
                        fontFamily: "Courier New, monospace",
                        fontSize: "1rem",
                        boxShadow: "0 0 8px #00FF4133",
                      }}
                    >
                      <b>Abstract:</b> {paper.abstract}
                    </Box>
                  </Collapse>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    <b>Authors:</b> {paper.authors}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <b>Venue:</b> {paper.venue} ({paper.year})
                  </Typography>
                  <Box
                    sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}
                  >
                    {paper.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "rgba(0, 255, 65, 0.1)",
                          color: "primary.main",
                          borderColor: "primary.main",
                          borderWidth: 1,
                          borderStyle: "solid",
                          fontFamily: "Courier New, monospace",
                          transition: "transform 0.6s ease-in-out",
                          "&:hover": {
                            transform: "rotate(360deg)",
                            boxShadow: "0 10px 20px rgba(0, 255, 65, 0.1)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
          <TypewriterQuote>
            &quot;What do all men with power want? More power.&quot; - The
            Merovingian
          </TypewriterQuote>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PapersSection;
