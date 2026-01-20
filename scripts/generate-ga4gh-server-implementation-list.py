import csv
from random import randint

fieldnames = ["id", "name", "type", "baseUrl", "country", "lastTested", "testStatus"]

server_names = [
    "Helix",
    "Codon",
    "Genome",
    "Chromis",
    "Ribosome",
    "Splice",
    "Operon",
    "Locus",
    "Phylo",
    "Axiom",
    "Allele",
    "Exome",
    "Intron",
    "Motif",
    "Variant",
    "Haplotype",
    "Epigen",
    "Transcript",
    "Nucleotide",
    "Polymorph",
    "Nucleus",
    "Cytosol",
    "Membrane",
    "Organelle",
    "Centromere",
    "Telomere",
    "Cilium",
    "Flagellum",
    "Cortex",
    "Scaffold",
    "Pipeline",
    "Atlas",
    "Matrix",
    "Topology",
    "Network",
    "Vector",
    "Signal",
    "Flux",
    "Kernel",
    "Inference",
    "Clade",
    "Lineage",
    "Ancestry",
    "Selection",
    "Drift",
    "Archive",
    "Index",
    "Vault",
    "Sentinel",
    "Beacon"
]

server_types = ["htsget", "refget", "rnaget", "drs", "trs", "wes", "tes", "beacon", "dataconnect"]

countries = ["CA", "US", "GB", "AU", "JP", "CN", "ZA", "BR", "ES", "DE"]

test_statuses = ["PASS", "FAIL"]

def main():
    data = []
    
    for i in range(len(server_names)):
        data.append({
            "id": i,
            "name": server_names[i],
            "type": server_types[randint(0, len(server_types)-1)],
            "baseUrl": f"https://{server_names[i].lower()}.com",
            "country": countries[randint(0, len(countries)-1)],
            "lastTested": "2026-01-20T00:00:00.000Z",
            "testStatus": test_statuses[randint(0, len(test_statuses)-1)]
        })
    
    with open('./public/ga4ghServerImplementations.csv', 'w') as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

if __name__ == "__main__":
    main()