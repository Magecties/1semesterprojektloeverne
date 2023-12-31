toc.dat                                                                                             0000600 0004000 0002000 00000017610 14525373703 0014455 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP       +                
    {            skraldebasen    15.4    15.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                    0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                    0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                    1262    16808    skraldebasen    DATABASE     �   CREATE DATABASE skraldebasen WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Danish_Denmark.1252';
    DROP DATABASE skraldebasen;
                postgres    false         �            1259    16979    Farlighedsfaktor    TABLE     �   CREATE TABLE public."Farlighedsfaktor" (
    farligfaktor_id bigint NOT NULL,
    "Farlighedsniveau" character varying(40),
    "Beskrivelse" character varying(250)
);
 &   DROP TABLE public."Farlighedsfaktor";
       public         heap    postgres    false         �            1259    16978 #   Falighedsfaktor_farligfaktor_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Falighedsfaktor_farligfaktor_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."Falighedsfaktor_farligfaktor_id_seq";
       public          postgres    false    219                    0    0 #   Falighedsfaktor_farligfaktor_id_seq    SEQUENCE OWNED BY     p   ALTER SEQUENCE public."Falighedsfaktor_farligfaktor_id_seq" OWNED BY public."Farlighedsfaktor".farligfaktor_id;
          public          postgres    false    218         �            1259    16965    skrald    TABLE     �   CREATE TABLE public.skrald (
    skrald_id bigint NOT NULL,
    navn character varying(50),
    skralde_kat_id bigint,
    farligfaktor_id bigint,
    nedbrydningstid character varying(40)
);
    DROP TABLE public.skrald;
       public         heap    postgres    false         �            1259    16964    Skrald_Skrald_id_seq    SEQUENCE        CREATE SEQUENCE public."Skrald_Skrald_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."Skrald_Skrald_id_seq";
       public          postgres    false    215                    0    0    Skrald_Skrald_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Skrald_Skrald_id_seq" OWNED BY public.skrald.skrald_id;
          public          postgres    false    214         �            1259    16972    skraldekategori    TABLE     p   CREATE TABLE public.skraldekategori (
    skralde_kat_id bigint NOT NULL,
    fraktion character varying(60)
);
 #   DROP TABLE public.skraldekategori;
       public         heap    postgres    false         �            1259    16971 "   skraldekategori_skralde_kat_id_seq    SEQUENCE     �   CREATE SEQUENCE public.skraldekategori_skralde_kat_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.skraldekategori_skralde_kat_id_seq;
       public          postgres    false    217                    0    0 "   skraldekategori_skralde_kat_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.skraldekategori_skralde_kat_id_seq OWNED BY public.skraldekategori.skralde_kat_id;
          public          postgres    false    216         q           2604    16982     Farlighedsfaktor farligfaktor_id    DEFAULT     �   ALTER TABLE ONLY public."Farlighedsfaktor" ALTER COLUMN farligfaktor_id SET DEFAULT nextval('public."Falighedsfaktor_farligfaktor_id_seq"'::regclass);
 Q   ALTER TABLE public."Farlighedsfaktor" ALTER COLUMN farligfaktor_id DROP DEFAULT;
       public          postgres    false    218    219    219         o           2604    16968    skrald skrald_id    DEFAULT     v   ALTER TABLE ONLY public.skrald ALTER COLUMN skrald_id SET DEFAULT nextval('public."Skrald_Skrald_id_seq"'::regclass);
 ?   ALTER TABLE public.skrald ALTER COLUMN skrald_id DROP DEFAULT;
       public          postgres    false    215    214    215         p           2604    16975    skraldekategori skralde_kat_id    DEFAULT     �   ALTER TABLE ONLY public.skraldekategori ALTER COLUMN skralde_kat_id SET DEFAULT nextval('public.skraldekategori_skralde_kat_id_seq'::regclass);
 M   ALTER TABLE public.skraldekategori ALTER COLUMN skralde_kat_id DROP DEFAULT;
       public          postgres    false    217    216    217                   0    16979    Farlighedsfaktor 
   TABLE DATA           `   COPY public."Farlighedsfaktor" (farligfaktor_id, "Farlighedsniveau", "Beskrivelse") FROM stdin;
    public          postgres    false    219       3341.dat 	          0    16965    skrald 
   TABLE DATA           c   COPY public.skrald (skrald_id, navn, skralde_kat_id, farligfaktor_id, nedbrydningstid) FROM stdin;
    public          postgres    false    215       3337.dat           0    16972    skraldekategori 
   TABLE DATA           C   COPY public.skraldekategori (skralde_kat_id, fraktion) FROM stdin;
    public          postgres    false    217       3339.dat            0    0 #   Falighedsfaktor_farligfaktor_id_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public."Falighedsfaktor_farligfaktor_id_seq"', 1, false);
          public          postgres    false    218                    0    0    Skrald_Skrald_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."Skrald_Skrald_id_seq"', 1, false);
          public          postgres    false    214                    0    0 "   skraldekategori_skralde_kat_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.skraldekategori_skralde_kat_id_seq', 1, false);
          public          postgres    false    216         w           2606    16984 %   Farlighedsfaktor Falighedsfaktor_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."Farlighedsfaktor"
    ADD CONSTRAINT "Falighedsfaktor_pkey" PRIMARY KEY (farligfaktor_id);
 S   ALTER TABLE ONLY public."Farlighedsfaktor" DROP CONSTRAINT "Falighedsfaktor_pkey";
       public            postgres    false    219         s           2606    16970    skrald Skrald_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.skrald
    ADD CONSTRAINT "Skrald_pkey" PRIMARY KEY (skrald_id);
 >   ALTER TABLE ONLY public.skrald DROP CONSTRAINT "Skrald_pkey";
       public            postgres    false    215         u           2606    16977 $   skraldekategori skraldekategori_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.skraldekategori
    ADD CONSTRAINT skraldekategori_pkey PRIMARY KEY (skralde_kat_id);
 N   ALTER TABLE ONLY public.skraldekategori DROP CONSTRAINT skraldekategori_pkey;
       public            postgres    false    217         x           2606    16985 "   skrald Skrald_farligfaktor_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.skrald
    ADD CONSTRAINT "Skrald_farligfaktor_id_fkey" FOREIGN KEY (farligfaktor_id) REFERENCES public."Farlighedsfaktor"(farligfaktor_id) NOT VALID;
 N   ALTER TABLE ONLY public.skrald DROP CONSTRAINT "Skrald_farligfaktor_id_fkey";
       public          postgres    false    3191    219    215         y           2606    16990 !   skrald Skrald_skralde_kat_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.skrald
    ADD CONSTRAINT "Skrald_skralde_kat_id_fkey" FOREIGN KEY (skralde_kat_id) REFERENCES public.skraldekategori(skralde_kat_id) NOT VALID;
 M   ALTER TABLE ONLY public.skrald DROP CONSTRAINT "Skrald_skralde_kat_id_fkey";
       public          postgres    false    215    3189    217                                                                                                                                3341.dat                                                                                            0000600 0004000 0002000 00000001044 14525373703 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Lavt farlighedsniveau	ikke-farligt affald som biologisk nedbrydelige materialer.
2	Moderat farlighedsniveau	Affald, der kan forårsage mindre miljøpåvirkninger
3	Høj farlighedsniveau	Skrald, der kan have betydelige konsekvenser for miljøet
4	Meget høj farlighedsniveau	Stort volumen af farligt affald eller affald, der kan forurene vandløb eller påvirke planteliv og dyreliv negativt.
5	Ekstremt høj farlighedsniveau	Katastrofale niveauer af forurening, der kan true økosystemet og have alvorlige konsekvenser for mennesker og dyr.
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            3337.dat                                                                                            0000600 0004000 0002000 00000001134 14525373703 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Cigaretskoder	6	5	4 år
2	Tyggegummi	9	3	25 år
3	Papir poser	2	1	1 måned
4	Plastik Poser	6	5	20 år
5	Hundelort	9	2	2 uger
6	Aluminiumdåser	5	3	500 år
7	Plastikflasker	6	4	450 år
8	Glas	4	2	mere end en million år
9	Ballon	6	4	4 år
10	Æbleskrog	1	2	2 måneder
11	Fiskesnøre	9	5	600 år
12	Plastikkrus	6	3	50 år
13	Ispind	9	2	10 år
14	Papkrus	3	2	10 år
15	Kapsel	5	4	100 år
16	Appelsinskrald	1	2	5 uger
17	bananskrald	1	2	5 uger
18	Mælkekarton	7	3	2 år
19	Nylon materialer	9	4	40 år
20	Mobiltelefon	8	5	1000 år
21	Cykel	9	2	Mere end 1000 år
22	Møbler	9	2	13 år
23	Tøj	9	2	5 år
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                    3339.dat                                                                                            0000600 0004000 0002000 00000000154 14525373703 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Madaffald
2	Papir
3	Pap
4	Glas
5	Metal
6	Plast
7	Mad og drikkekartoner
8	Farligt affald
9	Restaffald
\.


                                                                                                                                                                                                                                                                                                                                                                                                                    restore.sql                                                                                         0000600 0004000 0002000 00000014417 14525373703 0015404 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE skraldebasen;
--
-- Name: skraldebasen; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE skraldebasen WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Danish_Denmark.1252';


\connect skraldebasen

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Farlighedsfaktor; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Farlighedsfaktor" (
    farligfaktor_id bigint NOT NULL,
    "Farlighedsniveau" character varying(40),
    "Beskrivelse" character varying(250)
);


--
-- Name: Falighedsfaktor_farligfaktor_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Falighedsfaktor_farligfaktor_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Falighedsfaktor_farligfaktor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Falighedsfaktor_farligfaktor_id_seq" OWNED BY public."Farlighedsfaktor".farligfaktor_id;


--
-- Name: skrald; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.skrald (
    skrald_id bigint NOT NULL,
    navn character varying(50),
    skralde_kat_id bigint,
    farligfaktor_id bigint,
    nedbrydningstid character varying(40)
);


--
-- Name: Skrald_Skrald_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Skrald_Skrald_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Skrald_Skrald_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Skrald_Skrald_id_seq" OWNED BY public.skrald.skrald_id;


--
-- Name: skraldekategori; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.skraldekategori (
    skralde_kat_id bigint NOT NULL,
    fraktion character varying(60)
);


--
-- Name: skraldekategori_skralde_kat_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.skraldekategori_skralde_kat_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: skraldekategori_skralde_kat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.skraldekategori_skralde_kat_id_seq OWNED BY public.skraldekategori.skralde_kat_id;


--
-- Name: Farlighedsfaktor farligfaktor_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Farlighedsfaktor" ALTER COLUMN farligfaktor_id SET DEFAULT nextval('public."Falighedsfaktor_farligfaktor_id_seq"'::regclass);


--
-- Name: skrald skrald_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.skrald ALTER COLUMN skrald_id SET DEFAULT nextval('public."Skrald_Skrald_id_seq"'::regclass);


--
-- Name: skraldekategori skralde_kat_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.skraldekategori ALTER COLUMN skralde_kat_id SET DEFAULT nextval('public.skraldekategori_skralde_kat_id_seq'::regclass);


--
-- Data for Name: Farlighedsfaktor; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Farlighedsfaktor" (farligfaktor_id, "Farlighedsniveau", "Beskrivelse") FROM stdin;
\.
COPY public."Farlighedsfaktor" (farligfaktor_id, "Farlighedsniveau", "Beskrivelse") FROM '$$PATH$$/3341.dat';

--
-- Data for Name: skrald; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.skrald (skrald_id, navn, skralde_kat_id, farligfaktor_id, nedbrydningstid) FROM stdin;
\.
COPY public.skrald (skrald_id, navn, skralde_kat_id, farligfaktor_id, nedbrydningstid) FROM '$$PATH$$/3337.dat';

--
-- Data for Name: skraldekategori; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.skraldekategori (skralde_kat_id, fraktion) FROM stdin;
\.
COPY public.skraldekategori (skralde_kat_id, fraktion) FROM '$$PATH$$/3339.dat';

--
-- Name: Falighedsfaktor_farligfaktor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Falighedsfaktor_farligfaktor_id_seq"', 1, false);


--
-- Name: Skrald_Skrald_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Skrald_Skrald_id_seq"', 1, false);


--
-- Name: skraldekategori_skralde_kat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.skraldekategori_skralde_kat_id_seq', 1, false);


--
-- Name: Farlighedsfaktor Falighedsfaktor_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Farlighedsfaktor"
    ADD CONSTRAINT "Falighedsfaktor_pkey" PRIMARY KEY (farligfaktor_id);


--
-- Name: skrald Skrald_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.skrald
    ADD CONSTRAINT "Skrald_pkey" PRIMARY KEY (skrald_id);


--
-- Name: skraldekategori skraldekategori_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.skraldekategori
    ADD CONSTRAINT skraldekategori_pkey PRIMARY KEY (skralde_kat_id);


--
-- Name: skrald Skrald_farligfaktor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.skrald
    ADD CONSTRAINT "Skrald_farligfaktor_id_fkey" FOREIGN KEY (farligfaktor_id) REFERENCES public."Farlighedsfaktor"(farligfaktor_id) NOT VALID;


--
-- Name: skrald Skrald_skralde_kat_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.skrald
    ADD CONSTRAINT "Skrald_skralde_kat_id_fkey" FOREIGN KEY (skralde_kat_id) REFERENCES public.skraldekategori(skralde_kat_id) NOT VALID;


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 