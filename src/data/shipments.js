import { charSeperatedToJSON } from "../utilities";
export default charSeperatedToJSON(`
Shipment ID	Client Name	Origin	Destination	Mode	Estimated Departure	Estimated Arrival	Status
da9e36cb-4175-446b-97e7-8bdc8d6dbfc8	Broko	Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND	190 45 Stockholm-Arlanda, Sweden	Rail 	4/19/19	5/21/19	Arrived
7c6124c8-8639-4ec7-bc21-4a772715659c	Broko	Av de la Hispanidad, s/n, 28042 Madrid, Spain	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Air 	3/28/19	4/21/19	Arrived
574bb6f8-4bf6-4e60-9e41-e596c197e4e0	The Pike Brewing Company	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	482 Pier T Ave, Long Beach, CA 90802	Sea 	2/10/19	3/7/19	TransportError
d8525b5d-057c-4724-9901-45d6d10be100	The Pike Brewing Company	Hugo Eckener Ring 60549 Frankfurt	482 Pier T Ave, Long Beach, CA 90802	Sea 	3/15/19	4/16/19	TransportError
b0ed72fa-05f5-4128-ac94-064577d6fc8d	REI Seattle Flagship Store	6000 N Terminal Pkwy, Atlanta, GA 30320	Port of Los Angeles Los Angeles, CA	Rail 	4/24/19	5/25/19	In Transit
5c697cb3-8acd-423c-b815-5e3d6dc1c7b4	Alarwi	Keflavíkurflugvöllur, 235 Keflavík, Iceland	7-4 Deptford Rd, Singapore 759657	Rail 	1/24/19	2/21/19	Roll-Over
04e04f30-8df0-4136-ad9a-9d63087e4c6c	Speedy Groceries	Hugo Eckener Ring 60549 Frankfurt	Av de la Hispanidad, s/n, 28042 Madrid, Spain	Air 	3/1/19	4/1/19	In Transit
400a67dd-b0ef-48f0-8b6f-d7bec3ed2123	Broko	Av de la Hispanidad, s/n, 28042 Madrid, Spain	95700 Roissy-en-France, France	Sea 	4/25/19	5/26/19	Arrived
e398991c-6ad6-4255-a656-5b00ed965b42	Alarwi	Keflavíkurflugvöllur, 235 Keflavík, Iceland	10000 W O'Hare Ave, Chicago, IL 60666	Air 	2/21/19	3/19/19	In Transit
214d9a7f-6eb3-4db3-80b9-66377f395309	Speedy Groceries	Keflavíkurflugvöllur, 235 Keflavík, Iceland	10000 W O'Hare Ave, Chicago, IL 60666	Air 	1/13/19	2/7/19	Cancelled
6e5ade3a-fd7b-4f8b-b33d-f6d81dfb5440	The Pike Brewing Company	190 45 Stockholm-Arlanda, Sweden	New Udaan Bhawan, New Delhi 110037, INDIA	Sea 	3/22/19	4/15/19	Arrived
cbb3c448-6fff-46bd-bacf-0afea03f38b3	Microsoft	Av de la Hispanidad, s/n, 28042 Madrid, Spain	Lufthavnsboulevarden 6, 2770 Kastrup, Denmark	Rail 	4/13/19	5/7/19	Arrived
d9be1e99-1874-4ffe-8318-bd9de6bd3376	The Pike Brewing Company	6000 N Terminal Pkwy, Atlanta, GA 30320	Victoria Harbour 維多利亞港 Hong Kong	Rail 	4/11/19	5/12/19	Arrived
44e4a277-38b5-4a00-908b-cb45c51a4de2	Microsoft	1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa	482 Pier T Ave, Long Beach, CA 90802	Sea 	2/17/19	3/18/19	In Transit
abe87d4c-31a0-4451-96eb-8a83974a76ba	Speedy Groceries	201 Edgewater St, Staten Island, NY 10305	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Air 	2/10/19	3/6/19	Arrived
4dc909f8-a352-41e5-bca9-0bec9809109d	Tesla	482 Pier T Ave, Long Beach, CA 90802	190 45 Stockholm-Arlanda, Sweden	Air 	4/21/19	5/23/19	Customs Hold
5aa199f0-9761-450f-aa23-4e991b9002db	Sapphire Running	7-4 Deptford Rd, Singapore 759657	Port of Los Angeles Los Angeles, CA	Sea 	4/27/19	5/27/19	Arrived
52a453b2-015d-44c2-a165-87d1f3e04315	Dendreon Pharmaceutical LLC	Port of Los Angeles Los Angeles, CA	10000 W O'Hare Ave, Chicago, IL 60666	Rail 	2/27/19	3/25/19	Arrived
40aaaad9-aaa4-4bf4-bd49-622ecbde2bec	Microsoft	New Udaan Bhawan, New Delhi 110037, INDIA	7-4 Deptford Rd, Singapore 759657	Air 	2/8/19	3/9/19	Arrived
8374793c-ca76-41db-bf17-ab1d689d809c	Microsoft	95700 Roissy-en-France, France	201 Edgewater St, Staten Island, NY 10305	Air 	2/26/19	3/28/19	TransportError
b1c64f27-ada8-4187-bb98-9f454c90eac4	Microsoft	190 45 Stockholm-Arlanda, Sweden	Victoria Harbour 維多利亞港 Hong Kong	Sea 	1/26/19	2/16/19	Roll-Over
90b2a047-a7f3-4b03-8a97-ae22baa4a141	Alarwi	Keflavíkurflugvöllur, 235 Keflavík, Iceland	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	Sea 	4/24/19	5/16/19	In Transit
18db48d1-c13e-44b3-a778-714c0b7e215f	Alarwi	6000 N Terminal Pkwy, Atlanta, GA 30320	Edvard Munchs veg, 2061 Gardermoen, Norway	Sea 	1/12/19	2/12/19	Roll-Over
c89ba29b-a6fe-4c48-a15e-b048e60cba39	Microsoft	New Udaan Bhawan, New Delhi 110037, INDIA	7-4 Deptford Rd, Singapore 759657	Rail 	3/30/19	4/30/19	Arrived
fba22064-0dea-4154-b664-cbf6f5585f7e	REI Seattle Flagship Store	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	190 45 Stockholm-Arlanda, Sweden	Rail 	4/24/19	5/20/19	In Transit
94a1ebe1-cdaf-4daa-87e4-4268a314e499	REI Seattle Flagship Store	Victoria Harbour 維多利亞港 Hong Kong	Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND	Rail 	4/10/19	5/1/19	Arrived
f33ac566-b1a7-4376-b8e2-0c17ab4c08e2	REI Seattle Flagship Store	Edvard Munchs veg, 2061 Gardermoen, Norway	6000 N Terminal Pkwy, Atlanta, GA 30320	Rail 	3/21/19	4/12/19	Arrived
c36dabe7-2154-47af-8509-8998fae7e916	Microsoft	Victoria Harbour 維多利亞港 Hong Kong	Lufthavnsboulevarden 6, 2770 Kastrup, Denmark	Rail 	3/8/19	4/6/19	TransportError
f973d590-6058-4502-8091-7b7956d2f2b9	Speedy Groceries	Keflavíkurflugvöllur, 235 Keflavík, Iceland	190 45 Stockholm-Arlanda, Sweden	Sea 	4/4/19	4/25/19	Customs Hold
c8e0226b-1f16-48f6-98c9-1950064927e9	REI Seattle Flagship Store	7-4 Deptford Rd, Singapore 759657	Edvard Munchs veg, 2061 Gardermoen, Norway	Rail 	4/18/19	5/11/19	Customs Hold
e4cd3935-7263-4e00-bf3d-aa1600aed229	Microsoft	Victoria Harbour 維多利亞港 Hong Kong	190 45 Stockholm-Arlanda, Sweden	Sea 	1/28/19	2/19/19	Roll-Over
c858289b-1dc8-45b3-b037-f5bb9869cae8	Alarwi	95700 Roissy-en-France, France	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Sea 	3/12/19	4/5/19	Arrived
b2ed5015-ab36-4451-b636-0032175ecb6e	Avalyn Pharma	Lufthavnsboulevarden 6, 2770 Kastrup, Denmark	482 Pier T Ave, Long Beach, CA 90802	Rail 	1/19/19	2/9/19	Roll-Over
24005ed1-4f7d-4507-96b1-0f08b7898bbc	Tesla	Victoria Harbour 維多利亞港 Hong Kong	1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa	Air 	3/21/19	4/12/19	Arrived
02cdd662-f431-40cc-b0c2-fc37f4eb7bd0	Broko	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	Port of Los Angeles Los Angeles, CA	Rail 	4/14/19	5/14/19	Customs Hold
ab4ac47f-2f5f-4e31-bda3-eda8464de292	Tesla	Edvard Munchs veg, 2061 Gardermoen, Norway	Port of Los Angeles Los Angeles, CA	Rail 	3/11/19	4/9/19	Arrived
100805a1-da91-4f90-9b59-42a85873cd65	Tesla	7-4 Deptford Rd, Singapore 759657	95700 Roissy-en-France, France	Air 	3/30/19	4/28/19	TransportError
749d48ec-1b5e-4d7f-b30e-37df9747a20d	The Pike Brewing Company	Keflavíkurflugvöllur, 235 Keflavík, Iceland	New Udaan Bhawan, New Delhi 110037, INDIA	Air 	3/25/19	4/21/19	In Transit
996c3eb9-defe-4134-a177-6cfe9c747c13	Alarwi	Edvard Munchs veg, 2061 Gardermoen, Norway	Hugo Eckener Ring 60549 Frankfurt	Sea 	4/12/19	5/8/19	Customs Hold
65257e3d-64ca-4107-abff-5168eceb4f17	Speedy Groceries	Keflavíkurflugvöllur, 235 Keflavík, Iceland	1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa	Rail 	1/19/19	2/13/19	Roll-Over
a51bb5b6-60a0-45da-96db-d123ebe43cd1	Sapphire Running	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	7-4 Deptford Rd, Singapore 759657	Air 	2/21/19	3/15/19	In Transit
4d3bdfb8-284d-4f78-8d9e-5220c7033f62	Speedy Groceries	Port of Los Angeles Los Angeles, CA	482 Pier T Ave, Long Beach, CA 90802	Air 	2/16/19	3/12/19	In Transit
4aff66d5-0a46-4d04-b3ef-e901848f1624	Dendreon Pharmaceutical LLC	6000 N Terminal Pkwy, Atlanta, GA 30320	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Air 	2/27/19	3/30/19	TransportError
ee2b7e8c-9313-45b8-b16d-8ab29ff9bf98	Tesla	482 Pier T Ave, Long Beach, CA 90802	7-4 Deptford Rd, Singapore 759657	Air 	3/28/19	4/24/19	TransportError
a427c559-4732-4877-90a8-e14774995af7	Speedy Groceries	482 Pier T Ave, Long Beach, CA 90802	New Udaan Bhawan, New Delhi 110037, INDIA	Air 	2/19/19	3/13/19	TransportError
dd17312a-675a-40c5-9363-2a198cc1d450	Broko	190 45 Stockholm-Arlanda, Sweden	1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa	Sea 	3/4/19	3/26/19	In Transit
e15bc5ea-8247-4c17-8315-ff0e50b786f1	Tesla	Hugo Eckener Ring 60549 Frankfurt	Av de la Hispanidad, s/n, 28042 Madrid, Spain	Rail 	1/11/19	2/4/19	Cancelled
6a58d75b-a3e8-456b-b719-78f4896069a2	Broko	10000 W O'Hare Ave, Chicago, IL 60666	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	Sea 	3/30/19	5/1/19	In Transit
35410f3b-bf7f-470d-aecf-c03c908588a1	Broko	201 Edgewater St, Staten Island, NY 10305	Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND	Air 	1/23/19	2/14/19	Roll-Over
2001041f-2689-4f56-9175-de1a38d2bce2	Sapphire Running	Victoria Harbour 維多利亞港 Hong Kong	Port of Los Angeles Los Angeles, CA	Sea 	3/24/19	4/21/19	Arrived
8147722e-738a-461c-b74e-7d01da95964e	Alarwi	95700 Roissy-en-France, France	Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND	Sea 	3/27/19	4/18/19	In Transit
b604096f-0486-448a-a68e-36a8cc27a0cb	Alarwi	New Udaan Bhawan, New Delhi 110037, INDIA	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Rail 	3/18/19	4/12/19	In Transit
5b6c35de-9257-4bc5-b0bc-1708360188d3	Microsoft	6000 N Terminal Pkwy, Atlanta, GA 30320	201 Edgewater St, Staten Island, NY 10305	Rail 	1/29/19	2/28/19	Cancelled
9097d72c-4b18-4b56-a495-0afe9dcba9e5	Tesla	Lufthavnsboulevarden 6, 2770 Kastrup, Denmark	190 45 Stockholm-Arlanda, Sweden	Sea 	4/20/19	5/18/19	Customs Hold
1ac1a805-41cb-46a5-96e4-819a147c4f60	Alarwi	Hugo Eckener Ring 60549 Frankfurt	7-4 Deptford Rd, Singapore 759657	Sea 	1/18/19	2/9/19	Roll-Over
b0cbf90d-8873-483b-935a-ad5097f23f7f	Dendreon Pharmaceutical LLC	Victoria Harbour 維多利亞港 Hong Kong	95700 Roissy-en-France, France	Rail 	3/29/19	4/28/19	Customs Hold
116a0ad9-87f3-4f7b-b51e-507df83d25dd	Broko	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Victoria Harbour 維多利亞港 Hong Kong	Rail 	1/7/19	2/5/19	Cancelled
df0b0ce5-8bf8-415c-ba40-1f6a7d04bbd6	Speedy Groceries	Victoria Harbour 維多利亞港 Hong Kong	95700 Roissy-en-France, France	Sea 	3/1/19	4/1/19	In Transit
76f2fe67-9eea-45e9-b34e-e4a2ef32cce5	Microsoft	95700 Roissy-en-France, France	201 Edgewater St, Staten Island, NY 10305	Sea 	2/1/19	2/28/19	Cancelled
b3e6c18b-bc23-4174-aa02-22361b2444c5	Microsoft	6000 N Terminal Pkwy, Atlanta, GA 30320	Victoria Harbour 維多利亞港 Hong Kong	Rail 	4/25/19	5/23/19	Customs Hold
0a54979c-78a9-4c36-81c6-c4580568917c	Tesla	Hugo Eckener Ring 60549 Frankfurt	6000 N Terminal Pkwy, Atlanta, GA 30320	Rail 	1/1/19	1/22/19	Cancelled
85eeffee-85d9-4d5a-b6fa-ee9204df71af	Sapphire Running	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Rail 	1/2/19	2/1/19	Cancelled
95b789af-9146-435d-b60a-c88fd3a530f4	Alarwi	Hugo Eckener Ring 60549 Frankfurt	482 Pier T Ave, Long Beach, CA 90802	Rail 	1/20/19	2/19/19	Roll-Over
33f7028c-ad20-46ae-92e2-a2a9fea74cd2	Sapphire Running	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Lufthavnsboulevarden 6, 2770 Kastrup, Denmark	Sea 	1/6/19	2/5/19	Cancelled
fdb88cb2-4f41-4fa6-8813-51589d58214a	Alarwi	Edvard Munchs veg, 2061 Gardermoen, Norway	Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND	Rail 	1/18/19	2/18/19	Roll-Over
64e7d2a2-b475-4d03-a8f2-22cd73e547f4	Alarwi	New Udaan Bhawan, New Delhi 110037, INDIA	Hugo Eckener Ring 60549 Frankfurt	Rail 	2/24/19	3/22/19	Customs Hold
274b2233-02f5-4c71-b6ff-1e40b38d270b	Broko	190 45 Stockholm-Arlanda, Sweden	Av de la Hispanidad, s/n, 28042 Madrid, Spain	Air 	4/2/19	4/25/19	TransportError
d2e113f3-28c0-43d4-bcb0-10c2452d1ba2	Dendreon Pharmaceutical LLC	7-4 Deptford Rd, Singapore 759657	201 Edgewater St, Staten Island, NY 10305	Rail 	4/12/19	5/12/19	In Transit
7143e11d-5809-4415-948b-8b4a3e4595ec	The Pike Brewing Company	Victoria Harbour 維多利亞港 Hong Kokung	New Udaan Bhawan, New Delhi 110037, INDIA	Rail 	2/15/19	3/17/19	Customs Hold
8d768286-ce6c-4ae7-957e-ba5ecf1bb1d5	REI Seattle Flagship Store	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	Lufthavnsboulevarden 6, 2770 Kastrup, Denmark	Air 	3/29/19	4/20/19	In Transit
7480f9c2-3cb0-4719-a63a-ea4655c58c94	Alarwi	201 Edgewater St, Staten Island, NY 10305	Edvard Munchs veg, 2061 Gardermoen, Norway	Air 	1/13/19	2/7/19	Cancelled
83c3d141-704a-4e96-a434-375c6bee8592	Speedy Groceries	Keflavíkurflugvöllur, 235 Keflavík, Iceland	6000 N Terminal Pkwy, Atlanta, GA 30320	Rail 	1/30/19	2/26/19	Roll-Over
be8b2b5a-a6b0-4f1f-be29-52e41fc704d8	Alarwi	1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa	10000 W O'Hare Ave, Chicago, IL 60666	Air 	3/19/19	4/19/19	Customs Hold
75c3e661-6466-44a2-ab09-d1dda1e4ecad	Avalyn Pharma	Lufthavnsboulevarden 6, 2770 Kastrup, Denmark	10000 W O'Hare Ave, Chicago, IL 60666	Rail 	2/10/19	3/6/19	TransportError
cc18917d-bea7-4567-88da-532c8b46177c	The Pike Brewing Company	6000 N Terminal Pkwy, Atlanta, GA 30320	201 Edgewater St, Staten Island, NY 10305	Rail 	1/12/19	2/2/19	Cancelled
64734e7c-2f10-4a25-ace8-2bdf2d7cca47	Microsoft	95700 Roissy-en-France, France	Av de la Hispanidad, s/n, 28042 Madrid, Spain	Rail 	3/2/19	4/2/19	In Transit
69b362b3-a907-4e55-a561-4810c9aa32d7	Microsoft	Port of Los Angeles Los Angeles, CA	190 45 Stockholm-Arlanda, Sweden	Air 	4/19/19	5/13/19	Customs Hold
a9f06023-dfe0-4cf8-ac11-09d41b3035dd	Broko	Edvard Munchs veg, 2061 Gardermoen, Norway	7-4 Deptford Rd, Singapore 759657	Air 	3/20/19	4/12/19	In Transit
e4649791-eb60-4a2d-926c-b7e77301cfc3	Sapphire Running	201 Edgewater St, Staten Island, NY 10305	95700 Roissy-en-France, France	Air 	1/30/19	2/26/19	Cancelled
9e37d9ec-88c5-4faa-8291-553d6efc72f6	Alarwi	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	190 45 Stockholm-Arlanda, Sweden	Sea 	3/26/19	4/19/19	Arrived
ac4888ee-7e32-4beb-ae01-80ee16322165	Sapphire Running	482 Pier T Ave, Long Beach, CA 90802	10000 W O'Hare Ave, Chicago, IL 60666	Rail 	1/22/19	2/17/19	Roll-Over
9ac88e9d-3f68-488b-ad97-e4595680a260	Dendreon Pharmaceutical LLC	Port of Los Angeles Los Angeles, CA	6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada	Rail 	1/22/19	2/19/19	Roll-Over
438eefdf-95c2-47e6-b539-0ab2ba76aea6	Microsoft	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Hugo Eckener Ring 60549 Frankfurt	Rail 	1/7/19	2/7/19	Cancelled
8493d235-4d7b-4f5c-9459-fa87398207ae	Avalyn Pharma	New Udaan Bhawan, New Delhi 110037, INDIA	7-4 Deptford Rd, Singapore 759657	Rail 	4/9/19	5/11/19	Customs Hold
938ba7e8-5632-4c10-bd8a-563e6d1d937f	Dendreon Pharmaceutical LLC	Keflavíkurflugvöllur, 235 Keflavík, Iceland	Victoria Harbour 維多利亞港 Hong Kong	Rail 	1/29/19	2/26/19	Cancelled
d0e70f89-afc0-4889-a050-c8dca4b11cbc	Alarwi	Edvard Munchs veg, 2061 Gardermoen, Norway	Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND	Rail 	1/11/19	2/5/19	Cancelled
132bfb78-13d3-4854-af53-a3cf85bb8a7f	Avalyn Pharma	New Udaan Bhawan, New Delhi 110037, INDIA	Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND	Sea 	3/23/19	4/24/19	TransportError
1575c496-6a2d-41dc-996f-9c3bbcb88037	Broko	10000 W O'Hare Ave, Chicago, IL 60666	7-4 Deptford Rd, Singapore 759657	Rail 	4/16/19	5/7/19	In Transit
8ec3ce24-67fc-4916-aa3d-adb9650cc769	The Pike Brewing Company	482 Pier T Ave, Long Beach, CA 90802	Port of Los Angeles Los Angeles, CA	Air 	4/28/19	5/19/19	TransportError
371cbd15-0d0d-49f8-863a-8333e94c2f35	Broko	New Udaan Bhawan, New Delhi 110037, INDIA	95700 Roissy-en-France, France	Rail 	4/13/19	5/10/19	In Transit
a0d5c2b2-74b8-4915-8488-45b64ad72144	Broko	Keflavíkurflugvöllur, 235 Keflavík, Iceland	New Udaan Bhawan, New Delhi 110037, INDIA	Rail 	2/24/19	3/18/19	In Transit
1e68ef95-a71b-419c-a201-1060ab0e6802	REI Seattle Flagship Store	Av de la Hispanidad, s/n, 28042 Madrid, Spain	New Udaan Bhawan, New Delhi 110037, INDIA	Air 	1/12/19	2/6/19	Cancelled
8156b3ef-7bf3-48e1-9d02-7054de091358	Sapphire Running	Hugo Eckener Ring 60549 Frankfurt	6000 N Terminal Pkwy, Atlanta, GA 30320	Air 	2/20/19	3/24/19	In Transit
3ce5d35a-a09a-4b7e-8dbf-2fdf20621c76	Broko	Hugo Eckener Ring 60549 Frankfurt	Victoria Harbour 維多利亞港 Hong Kong	Rail 	3/25/19	4/23/19	In Transit
e6098094-a0e5-40b1-ac6b-3688e64a88ce	Sapphire Running	482 Pier T Ave, Long Beach, CA 90802	Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND	Air 	4/9/19	5/5/19	In Transit
b4cf758a-f696-4a13-a68d-065911f9933d	Sapphire Running	New Udaan Bhawan, New Delhi 110037, INDIA	Port of Los Angeles Los Angeles, CA	Air 	2/3/19	3/3/19	Customs Hold
d1ebd3e8-2b71-4604-bbb9-c9050ded8852	REI Seattle Flagship Store	Hugo Eckener Ring 60549 Frankfurt	6000 N Terminal Pkwy, Atlanta, GA 30320	Rail 	3/26/19	4/21/19	Customs Hold
65fb5e79-c9a4-43eb-86b1-0424f8088f52	The Pike Brewing Company	Keflavíkurflugvöllur, 235 Keflavík, Iceland	482 Pier T Ave, Long Beach, CA 90802	Rail 	2/21/19	3/15/19	Customs Hold
a5482222-a598-4cd2-8a8d-c416f9702741	The Pike Brewing Company	Av de la Hispanidad, s/n, 28042 Madrid, Spain	6000 N Terminal Pkwy, Atlanta, GA 30320	Sea 	4/15/19	5/14/19	Customs Hold
c998e634-135e-4d2d-84f5-3ca89a9fcb66	Microsoft	New Udaan Bhawan, New Delhi 110037, INDIA	Hugo Eckener Ring 60549 Frankfurt	Air 	3/5/19	4/3/19	Customs Hold
`, "\n", "\t", ['Shipment ID','Client Name','Origin','Destination','Mode','Estimated Departure','Estimated Arrival','Status']);