## Procedure

Metabolic flux analysis (MFA) is a powerful approach to quantify the rates of metabolic reactions within living organisms. In crop plants, this methodology helps elucidate the flow of metabolites through various metabolic pathways, thereby enhancing understanding of plant physiology, stress responses, and productivity.  

Step-by-step procedure for metabolic flux determination in crop plants, typically using isotopic labelling and computational modelling approaches:

1. Selection of Biological System and Objective
- Choosing the plant species and tissue (e.g., leaf, root, seed).
- Defining the experimental goal: e.g., understanding carbon partitioning, nitrogen metabolism, or stress adaptation.
- Selection of developmental stage and growth conditions (light, temperature, nutrient availability).

2. Experimental Design
- Deciding on the labelling strategy:
   - Common isotopes: ¹³C, ¹⁵N, ²H.
   - Choosing of a suitable labelled substrate (e.g., ¹³CO₂ for photosynthetic fluxes, ¹³C-glucose for heterotrophic tissues).
- Determining the labelling duration:
  - Short-term pulse for transient labelling (for dynamic flux analysis).
  - Long-term labelling until isotopic steady state (for steady-state MFA).

3. Plant Growth and Labelling
- Growing the plants under controlled conditions in growth chambers or greenhouses.
- Introduction of the labelled compound:
  - For ¹³CO₂ labelling: use gas-tight chambers with controlled atmospheric composition.
  - For root-feeding: introduce labelled nutrients via hydroponics or media.
- Monitoring the labelling progress through time-course sampling.

4. Sampling and Quenching
- Harvesting of the tissues at specific time points.
- Immediate quenching of metabolism to prevent post-harvest metabolic changes:
  - Rapid freezing in liquid nitrogen.
  - Alternatively, fast inactivation using cold methanol.
- Storing of samples at −80°C until extraction.

5. Metabolite Extraction and Analysis
- Extraction of intracellular metabolites using solvents such as methanol:chloroform:water.
- Removal of interfering compounds (e.g., pigments, cell wall components).
- Derivatization of the metabolites (for GC-MS or LC-MS analysis if required).
- Analyzing the isotope labelling patterns using:
  - Gas chromatography–mass spectrometry (GC-MS).
  - Liquid chromatography–mass spectrometry (LC-MS).
  - Nuclear magnetic resonance (NMR) spectroscopy (optional for specific nuclei).

6. Identification and Quantification of Metabolites
- Using internal standards to ensure accurate quantification.
- Identification of metabolites based on mass spectra, retention time, and fragmentation patterns.
- Determination of isotopologue distributions (i.e., mass isotopomer patterns).

7. Metabolic Network Construction
- Building of a metabolic network model including relevant pathways:
  - Glycolysis, TCA cycle, Calvin cycle, photorespiration, amino acid synthesis, etc.
- Define:
  - Metabolite nodes
  - Reactions (with stoichiometry)
  - Compartmentalization (chloroplast, cytosol, mitochondria)

8. Flux Estimation via Modelling
- Input the isotopologue data into a modelling software:
   - Isotopomer Network Compartmental Analysis (INCA)
   - 13CFLUX2, OpenFLUX, or Metran
- Applicationn of appropriate constraints and initial flux estimates.
- Solving using:
  - Nonlinear optimization to fit observed labeling patterns.
  - Least-squares minimization or other algorithms to estimate best-fit fluxes.

9. Statistical Analysis and Validation
- Evaluation of goodness of fit using statistical metrics (χ² test, residual analysis).
- Performing sensitivity analysis and confidence interval estimation for fluxes.
- Validating the predicted fluxes against physiological data (e.g., biomass accumulation, CO₂ uptake).

10. Data Interpretation and Biological Insights
- Map fluxes onto metabolic pathways for visualization.
- Compare flux profiles under different conditions (e.g., stress vs control).
- Integrate with other omics data (transcriptomics, proteomics) for systems-level interpretation.

#### Some examples of Metabolic flux analysis in Plants:
Ratcliffe and Shachar-Hill, together with Allen et al., offer thorough evaluations of current methodologies for assessing plant metabolic network activities. A combination labelling study in Arabidopsis thaliana addressed concerns that isotope labelling would introduce artifacts due to isotope effects, demonstrating that the administration of labelled substrates did not result in any significant disruption of central metabolism. Graham et al. conducted a comprehensive investigation on Arabidopsis thaliana utilizing multiple substrates labeled with <sup>14</sup>C and <sup>13</sup>C, the latter analyzed via <sup>13</sup>C NMR, to investigate the interplay between respiration and glycolysis. Glycolytic substrate channelling is affected by the dynamic attachment and dissociation of glycolytic enzymes with the mitochondrion. Dynamic labelling experiments using potato tuber slices and subsequent data analysis through a dynamic model facilitated the identification of metabolic fluxes, enzyme expression levels, and metabolite dynamics in the metabolism of aromatics derived from phenylalanine. The tagged aromatic component of L-phenylalanine-d5 was preserved across all analyzed species. Baxter et al. similarly analyzed mass isotopomers of C4-metabolites involved in threonine biosynthesis to determine the metabolic fluxes of that pathway. Williams et al. conducted a comprehensive investigation on the impact of increased oxygen availability on metabolic fluxes in Arabidopsis cell culture, employing <sup>13</sup>C metabolic flux analysis with the administration of variously <sup>13</sup>C-labeled glucose. The relative flux distribution remained almost unchanged despite an increase in oxygen supply, while the total growth rate improved. They also discovered, akin to other researchers, that reversibilities are challenging to ascertain, potentially due to parameter correlation, as demonstrated by Yang et al. in a comparable bacterial system. An exhaustive examination of anabolic pathways and the localization of synthesis facilitated the identification of novel biomass monomers, whose labelling could be quantified by MS and NMR to ascertain compartment fluxes. Studies utilizing <sup>13</sup>C to analyze the core metabolism of intact native plants are challenged by the only reliance on CO<sub>2</sub> as the carbon source. Dynamic feeding of <sup>13</sup>CO<sub>2</sub> revealed that the roots and shoots of perennial ryegrass are nourished by identical substrate pools. The accumulation rates of fatty acids, along with the metabolic rates of sucrose and monosaccharides, were assessed in linseed embryos following the administration of <sup>13</sup>C-labeled glucose, facilitating a calculation of metabolic rates throughout time.
