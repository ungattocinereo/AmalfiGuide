export const getPlacesData = (lang) => {
    const data = {
        EN: [
            {
                id: "places",
                category: "Places in Atrani & Amalfi",
                items: [
                    {
                        id: "square-atrani",
                        name: "Square in Atrani (Piazzetta Umberto I)",
                        tag: "Photo Spot / Atmosphere",
                        tagline: "The authentic heart of the village",
                        gregorysTake: "Follow the green arrows through the village to discover this cinematic square. It’s the perfect spot to escape the Amalfi crowds and capture the true soul of the coast.",
                        fullDesc: "Throughout Atrani, you'll spot signs with prominent green arrows—these are actually flood evacuation markers, but for us, they are guides to beauty. Following them leads you to the charming Piazzetta Umberto I, right in front of the San Salvatore de' Birecto church. It is intimate, enclosed by traditional houses, and serves as the living room for locals. Grab a coffee here and watch the world go by; it’s a signature sight that embodies the essence of Atrani.",
                        photo: "https://amalfi.day/wp-content/uploads/2023/03/2-atrani-new-photos-aquarelle.webp",
                        rating: "4.5/5",
                        reviewCount: "250+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9QEVNhZqFHJsQDVRA",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g635619-d6849968-Reviews-Collegiate_Santa_Maria_Maddalena-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "castiglione-beach",
                        name: "Castiglione Beach (Lido di Ravello)",
                        tag: "Hidden Beach",
                        tagline: "Serenity between the cliffs",
                        gregorysTake: "A picturesque secret nestled between towering cliffs, just a short walk from Atrani. It requires some effort to reach, which keeps the massive crowds away.",
                        fullDesc: "Nestled between two dramatic cliffs lies this picturesque location, just a short distance beyond the Atrani square. To reach this idyllic spot, continue down the main road and look for the entrance with a staircase. Be prepared: it’s a descent of approximately 200 steps to reach the water, but the crystal-clear sea and the view of the church of Maddalena from below are worth every step.",
                        photo: "https://image.pollinations.ai/prompt/Castiglione%20Beach%20Amalfi%20Coast%20scenic%20view%20blue%20water",
                        rating: "4.0/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ErtYNHAQwcpwQQMn7",
                            tripAdvisor: "https://www.tripadvisor.it/Attraction_Review-g12079897-d10714192-Reviews-Lido_di_Ravello-Castiglione_Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "duomo-amalfi",
                        name: "Duomo di Sant’Andrea (Amalfi Cathedral)",
                        tag: "Historical Landmark",
                        tagline: "The icon of Amalfi",
                        gregorysTake: "You can't visit Amalfi without seeing the Duomo. Its 62-step staircase is legendary, but the real magic is the peaceful Cloister of Paradise inside.",
                        fullDesc: "The Duomo is the architectural heart of Amalfi, dating back to the 9th century. This majestic building features a dramatic staircase, a striking Arab-Norman facade, and massive bronze doors cast in Constantinople. Inside lie the relics of Saint Andrew, the patron saint. The complex includes the Basilica of the Crucifix and the Cloister of Paradise. Tip: Arrive early (around 9:00 AM) to experience the solemn beauty before the day-trippers arrive.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Cathedral%20Duomo%20di%20Sant%20Andrea%20facade%20stairs",
                        rating: "4.5/5",
                        reviewCount: "4,300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d195006-Reviews-Duomo_di_Sant_Andrea-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "amalfi-elevator",
                        name: "Amalfi Municipal Elevator",
                        tag: "Viewpoint",
                        tagline: "The best panorama without the hike",
                        gregorysTake: "Want the best bird’s-eye view of Amalfi without breaking a sweat? Skip the stairs and take this secret tunnel to the cemetery level.",
                        fullDesc: "This location offers the undisputed best view of Amalfi from above. From Atrani, walk toward Amalfi. Near the \"Luna Rossa\" parking garage, you'll find a pedestrian tunnel. Walk through it, turn right at the end, and find the gate to a second tunnel leading to the public elevator. It whisks you up to the monumental cemetery level. The silence up there, combined with the view of the harbor and cathedral, is breathtaking.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Coast%20panoramic%20view%20from%20above%20sea%20cliffs",
                        rating: "4.0/5",
                        reviewCount: "20+",
                        links: {
                            googleMaps: "https://goo.gl/maps/XKX2UpeRBYQecQyj7",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d26860088-Reviews-Ascensore_per_il_Cimitero_Monumentale-Amalfi_Amalfi_Coast_Province_of_Salerno_C.html"
                        }
                    },
                    {
                        id: "secret-waterfall",
                        name: "Secret Waterfall (Valle dei Mulini)",
                        tag: "Hidden Gem",
                        tagline: "Ancient ruins and cooling waters",
                        gregorysTake: "A true hidden spot behind the private villas where few tourists venture. It feels like stepping into a 'Jungle Book' scene right in Amalfi.",
                        fullDesc: "Walk up the main road in Amalfi (Via Capo di Piazza) until the very end. You'll see a private villa and a closed gate. Turn left and take the steps up. Across from the villa, at the end of the path, you will discover old ruined watermills, a large cave, and a beautiful waterfall cascading below. It is cool, green, and completely silent compared to the busy piazza.",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20waterfall%20Amalfi%20nature%20lush%20green",
                        rating: null,
                        reviewCount: null,
                        links: {
                            googleMaps: "https://goo.gl/maps/oNNm5mfiJ8bySLns9",
                            tripAdvisor: null
                        }
                    }
                ]
            },
            {
                id: "hiking",
                category: "Hiking & Nature",
                items: [
                    {
                        id: "valle-delle-ferriere",
                        name: "Valle delle Ferriere",
                        tag: "Nature Reserve",
                        tagline: "Waterfalls and ancient history",
                        gregorysTake: "Escape the heat into a lush, Jurassic-like reserve. This easy trek takes you through lemon groves and past industrial ruins to magical waterfalls.",
                        fullDesc: "Valle delle Ferriere is a protected nature reserve hidden in the mountains between Scala and Amalfi. The name comes from the medieval ironworks that once operated here. Today, it’s a sanctuary of rare ferns and rushing water. The hike is manageable (2-3 hours) and offers a rare shady retreat during summer. You'll see the ruins of the old paper mills that made Amalfi famous. Wear non-slip shoes!",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20nature%20reserve%20Amalfi%20waterfall%20ferns",
                        rating: "4.5/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/fJq5Z1Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d3606622-Reviews-Valle_delle_Ferriere-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "torre-dello-ziro",
                        name: "Torre dello Ziro",
                        tag: "Best View",
                        tagline: "History and the ultimate panorama",
                        gregorysTake: "If you want that one specific shot looking straight down onto the rooftops of Atrani and Amalfi, this is it. Quiet, hauntingly beautiful, and far less crowded than Path of the Gods.",
                        fullDesc: "This watchtower sits on the ridge separating Amalfi and Atrani. Legend says the Duchess Giovanna d'Aragona was imprisoned here for her scandalous affair. The trail starts from Pontone and is a pleasant 30-40 minute walk through pine forests. Unlike other trails, it offers plenty of shade. The view from the platform next to the tower is arguably the best on the entire coast.",
                        photo: "https://image.pollinations.ai/prompt/Torre%20dello%20Ziro%20watchtower%20Amalfi%20Coast%20view%20Atrani",
                        rating: "4.5/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d4819264-Reviews-Torre_dello_Ziro-Pontone_Scala_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "path-of-gods",
                        name: "Path of the Gods (Sentiero degli Dei)",
                        tag: "Hiking Trail",
                        tagline: "The world-famous bucket list hike",
                        gregorysTake: "It's touristy for a reason—the views are unmatched. My advice: Start in Bomerano and walk down towards Nocelle to keep the best views in front of you.",
                        fullDesc: "This is the most famous hiking trail on the Amalfi Coast. It runs along the mountain ridges high above the sea. You'll need to take a bus to Bomerano (Agerola) to start. The trail ends in Nocelle, a cute village above Positano. From there, be prepared for 1,700 steps down to Positano (or take the bus). The scenery changes around every corner, offering dramatic cliffs and endless sea views.",
                        photo: "https://image.pollinations.ai/prompt/Path%20of%20the%20Gods%20Amalfi%20Coast%20hiking%20trail%20breathtaking%20view",
                        rating: "5.0/5",
                        reviewCount: "6,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/wsz6fGJJMjy",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187782-d596338-Reviews-Sentiero_degli_Dei-Positano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lemon-path",
                        name: "The Lemon Path (Sentiero dei Limoni)",
                        tag: "Hiking Trail",
                        tagline: "A fragrant walk kissed by the sun",
                        gregorysTake: "An easier alternative to the mountain hikes. This path connects Maiori and Minori and takes you right through the heart of the region's lemon farming culture.",
                        fullDesc: "Set in one of the most fascinating spots of the coast, the \"Path of Lemons\" winds through terraced gardens. It’s an easy-to-moderate walk (about 1 hour) that offers stunning views over the sea and the towns below. In season, you might see farmers carrying heavy baskets of \"Sfusato Amalfitano\" lemons on their backs. Stop for a fresh lemonade along the way!",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20lemon%20groves%20path%20yellow%20lemons%20sea%20background",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/pEuEERdx7SPheoSw8",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g580202-d12361093-Reviews-Sentiero_dei_Limoni-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "food",
                category: "Places to Eat (Atrani & Amalfi)",
                items: [
                    {
                        id: "le-palme",
                        name: "Le Palme (Atrani)",
                        tag: "Family Restaurant",
                        tagline: "Authentic hospitality & seafood",
                        gregorysTake: "Run by brothers Armando and Salvatore since 1990, this place feels like home. It’s my top pick for a reliable, delicious meal where the service is as good as the food.",
                        fullDesc: "Le Palme is an institution in Atrani. While many coastal restaurants struggle with consistency, Le Palme excels. Don't miss their signature pasta with pistachio pesto or the paccheri with redfish and walnuts. The grilled seafood is always fresh. The atmosphere is lively and family-oriented—during holidays, you might even see the brothers' kids helping out. They also offer excellent gluten-free options.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20restaurant%20terrace%20Atrani%20Le%20Palme%20dining",
                        rating: "4.5/5",
                        reviewCount: "1,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/1usaXJbxcNJyosFdA",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1473698-Reviews-Le_Palme_Ristorante_Pizzeria-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "a-paranza",
                        name: "A'Paranza (Atrani)",
                        tag: "Michelin Selection",
                        tagline: "Refined seafood excellence",
                        gregorysTake: "A Michelin-selected gem that remains humble. If you are a foodie or an Instagrammer looking for the perfect risotto, this is your spot.",
                        fullDesc: "Included in the Michelin Guide, A'Paranza is dedicated to quality. Despite its unassuming appearance, every detail is curated, from the cutlery to the local lemons used in the sauce. Their signature Risotto con crema di scampi is legendary. Located just 200 meters from the water, they serve only the freshest catch. The wine list is extensive, and the staff are experts at pairing.",
                        photo: "https://image.pollinations.ai/prompt/Gourmet%20seafood%20dish%20Amalfi%20Coast%20Michelin%20style",
                        rating: "4.5/5",
                        reviewCount: "600+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ZJcWN2TiNHCk3E7G6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034462-Reviews-A_Paranza-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "da-ciccio",
                        name: "Da Ciccio Cielo Mare Terra (Vettica/Amalfi)",
                        tag: "Legendary Restaurant",
                        tagline: "Garden-to-table with a view",
                        gregorysTake: "A historic family-run spot since 1931 with incredible hospitality. Use their free shuttle service from Amalfi—it makes the logistics effortless.",
                        fullDesc: "Located in Vettica (just above Amalfi), Da Ciccio is an institution. They cultivate their own vegetable garden, meaning the produce on your plate is zero-kilometer. They serve perhaps the best fish carpaccio on the coast. But the real highlight is the warmth of the family management; you are treated like an old friend.",
                        photo: "https://image.pollinations.ai/prompt/Da%20Ciccio%20Amalfi%20restaurant%20terrace%20sea%20view%20food",
                        rating: "4.5/5",
                        reviewCount: "1,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d1154564-Reviews-Da_Ciccio_Cielo_Mare_Terra-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "le-arcate",
                        name: "Le Arcate (Atrani)",
                        tag: "Seafront Dining",
                        tagline: "The best seats in town",
                        gregorysTake: "Location, location, location. If you want to eat right by the water's edge in Atrani, book a table here. A favorite of celebrities like Edward Norton for its privacy and view.",
                        fullDesc: "Le Arcate is a beloved local spot for those who want the best seats in Atrani. Managed by a close-knit family, the menu has remained largely unchanged since 1965, focusing on simple, high-quality tradition. As the chef says: \"I just salt and pepper the fish. I don't make it better, I make it the way it should be.\" Note: As of 2024, they focus on restaurant service and may not serve pizza.",
                        photo: "https://image.pollinations.ai/prompt/Restaurant%20Le%20Arcate%20Atrani%20sea%20view%20tables",
                        rating: "4.0/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/xKN3G21T2BLzhMbG7",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034463-Reviews-Le_Arcate-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "apicella-bakery",
                        name: "Apicella Bakery (Amalfi)",
                        tag: "Street Food / Breakfast",
                        tagline: "The local's secret breakfast pizza",
                        gregorysTake: "Skip the hotel breakfast. Do as the locals do and grab a slice of red pizza here. It’s unassuming, cheap, and absolutely delicious.",
                        fullDesc: "Tucked away just 70 meters from the Amalfi Duomo, this bakery is easy to miss but impossible to forget. It’s a takeout-only spot open mostly in the mornings. It is the go-to pitstop for school students and workers. There is no seating, but the flavor of their bread and pizza slices is the most authentic you'll find in the town center.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20bakery%20pizza%20focaccia%20Amalfi%20morning",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bWSK37czwKoPSdC36",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d4778107-Reviews-Panificio_Apicella-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "la-rua",
                        name: "La Rua Pizze E Delizie (Amalfi)",
                        tag: "Street Food",
                        tagline: "Arancini & wood-fired snacks",
                        gregorysTake: "The perfect spot for a quick bite while exploring the alleys. Their arancini are crispy perfection.",
                        fullDesc: "Located in the heart of Amalfi, La Rua offers more than just street food; they serve exceptional wood-fired pizzas prepared with precision. The aroma of freshly baked dough draws you in. It’s also a great spot to try traditional fried snacks like crocche (potato croquettes) and arancini. A hidden culinary gem for a casual lunch.",
                        photo: "https://image.pollinations.ai/prompt/Arancini%20Italian%20street%20food%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "200+",
                        links: {
                            googleMaps: "https://goo.gl/maps/jwgUvMgD3NqxErhs5",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d23896504-Reviews-La_Rua_Pizze_E_Delizie-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "not_only",
                category: "Not Only Amalfi (Wider Area)",
                items: [
                    {
                        id: "ravello-infinity",
                        name: "Ravello - Infinity Terrace (Villa Cimbrone)",
                        tag: "Sightseeing",
                        tagline: "The view of a lifetime",
                        gregorysTake: "Ravello is the balcony of the world. The Infinity Terrace is arguably the most photographed spot on the coast—you’ll feel like you’re floating between sea and sky.",
                        fullDesc: "Ravello sits high on the cliffs, about a 20-minute bus ride from Amalfi. The crown jewel is Villa Cimbrone and its \"Terrazza dell'Infinito.\" Lined with marble busts and overlooking the Tyrrhenian Sea, it offers a panorama that has inspired writers and filmmakers (seen in Tenet and Wonder Woman). It’s a must-visit for the gardens alone.",
                        photo: "https://image.pollinations.ai/prompt/Villa%20Cimbrone%20Infinity%20Terrace%20Ravello%20statues%20sea%20view",
                        rating: "4.5/5",
                        reviewCount: "2,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d245903-Reviews-Villa_Cimbrone_Gardens-Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "sal-de-riso",
                        name: "Sal De Riso (Minori)",
                        tag: "Pastry Shop",
                        tagline: "The world's best pastries",
                        gregorysTake: "Sal De Riso isn't just a pastry chef; he's a celebrity. You cannot leave the coast without trying his \"Delizia al Limone\" or the \"Ricotta e Pere\" cake.",
                        fullDesc: "Located in Minori, this is a temple of sweetness. Master Pastry Chef Sal De Riso has over 30 years of experience. The shop is vibrant and busy, offering a massive selection of cakes, gelato, and pastries made with local ingredients like Giffoni hazelnuts and Amalfi lemons. It’s also a great spot for an aperitivo.",
                        photo: "https://image.pollinations.ai/prompt/Sal%20De%20Riso%20pastries%20lemon%20delight%20Minori",
                        rating: "4.0/5",
                        reviewCount: "4,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9nKrLusvyTwxasxV6",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g580202-d3184471-Reviews-Pasticceria_Sal_De_Riso-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "al-valico",
                        name: "Al Valico di Chiunzi (Tramonti)",
                        tag: "Mountain Dining",
                        tagline: "Rustic food with a view of Vesuvius",
                        gregorysTake: "Want to see where the locals eat on Sundays? Head up to the mountains. The air is cooler, and the pizzas are literally meter-long.",
                        fullDesc: "Located at a mountain pass (Valico di Chiunzi) about 3,000 feet above sea level, this spot offers a panoramic vista that extends far into the distance. The restaurant is famous for its \"Pizza a Metro\" (meter-long pizza) and hearty meat dishes. It’s a popular stop for hikers and those wanting to escape the coastal humidity.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20pizza%20meter%20long%20Tramonti%20wood%20oven",
                        rating: "4.0/5",
                        reviewCount: "300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/4AXTXoaMm7hJpbMr6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635618-d3184320-Reviews-Al_Valico_di_Chiunzi-Tramonti_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "marina-di-praia",
                        name: "Marina di Praia (Praiano)",
                        tag: "Beach / Chill",
                        tagline: "Sun, cliffs, and spaghetti",
                        gregorysTake: "Often cited by experienced travelers as the best \"chill\" spot. No glamour, just a tiny beach wedged between massive cliffs with great food right on the stones.",
                        fullDesc: "Unlike Positano, Marina di Praia has a laid-back soul. The beach is located at the mouth of a gorge in Praiano. It is accessible by car or bus. The sun leaves early here due to the cliffs, so it's perfect for a morning swim followed by a long, lazy lunch at one of the beachside trattorias (like Bar Mare Petit).",
                        photo: "https://image.pollinations.ai/prompt/Marina%20di%20Praia%20beach%20cliffs%20boats%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194868-d590479-Reviews-Marina_di_Praia_Beach-Praiano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lido-degli-artisti",
                        name: "Lido degli Artisti (Amalfi)",
                        tag: "Beach Club",
                        tagline: "Accessible only by boat or stairs",
                        gregorysTake: "A stunningly beautiful spot that feels exclusive. Take the boat shuttle from Amalfi harbor for the full experience.",
                        fullDesc: "Renowned for its crystal-clear waters and relaxing atmosphere, this beach is a gem. It offers breathtaking views of the Mediterranean and is equipped with sun loungers and a restaurant. It is named after the artists (like painter Ivan Aivazovsky) who were inspired by this specific seascape.",
                        photo: "https://image.pollinations.ai/prompt/Lido%20degli%20Artisti%20Amalfi%20beach%20umbrellas%20sea",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bomxs99HVDxbcdqD6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g187780-d4543923-Reviews-Lido_Degli_Artisti-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            }
        ],
        RU: [
            {
                id: "places",
                category: "Места в Атрани и Амальфи",
                items: [
                    {
                        id: "square-atrani",
                        name: "Площадь в Атрани (Piazzetta Umberto I)",
                        tag: "Фото-спот / Атмосфера",
                        tagline: "Подлинное сердце деревни",
                        gregorysTake: "Следуйте за зелеными стрелками через деревню, чтобы найти эту кинематографичную площадь. Это идеальное место, чтобы сбежать от толпы Амальфи и уловить истинную душу побережья.",
                        fullDesc: "По всему Атрани вы увидите знаки с заметными зелеными стрелками — на самом деле это знаки эвакуации при наводнении, но для нас это путеводители к красоте. Следуя им, вы попадете на очаровательную Пьяццетту Умберто I, прямо перед церковью Сан-Сальваторе де Биректо. Она уютная, окруженная традиционными домами, и служит гостиной для местных жителей. Возьмите здесь кофе и понаблюдайте за жизнью; это знаковое место, воплощающее суть Атрани.",
                        photo: "https://amalfi.day/wp-content/uploads/2023/03/2-atrani-new-photos-aquarelle.webp",
                        rating: "4.5/5",
                        reviewCount: "250+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9QEVNhZqFHJsQDVRA",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g635619-d6849968-Reviews-Collegiate_Santa_Maria_Maddalena-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "castiglione-beach",
                        name: "Пляж Кастильоне (Lido di Ravello)",
                        tag: "Скрытый пляж",
                        tagline: "Спокойствие между скалами",
                        gregorysTake: "Живописный секрет, спрятанный между высокими скалами, всего в нескольких минутах ходьбы от Атрани. Сюда не так просто добраться, что отпугивает большие толпы.",
                        fullDesc: "Между двумя драматичными скалами расположилось это живописное место, совсем недалеко от площади Атрани. Чтобы добраться до этого идиллического уголка, идите по главной дороге и ищите вход с лестницей. Будьте готовы: спуск к воде занимает около 200 ступенек, но кристально чистое море и вид на церковь Маддалены снизу стоят каждого шага.",
                        photo: "https://image.pollinations.ai/prompt/Castiglione%20Beach%20Amalfi%20Coast%20scenic%20view%20blue%20water",
                        rating: "4.0/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ErtYNHAQwcpwQQMn7",
                            tripAdvisor: "https://www.tripadvisor.it/Attraction_Review-g12079897-d10714192-Reviews-Lido_di_Ravello-Castiglione_Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "duomo-amalfi",
                        name: "Собор Святого Андрея (Дуомо)",
                        tag: "Историческая достопримечательность",
                        tagline: "Икона Амальфи",
                        gregorysTake: "Нельзя посетить Амальфи, не увидев Дуомо. Его лестница из 62 ступеней легендарна, но настоящая магия — это тихий Райский дворик внутри.",
                        fullDesc: "Дуомо — архитектурное сердце Амальфи, датируемое 9 веком. Это величественное здание отличается драматичной лестницей, поразительным арабо-нормандским фасадом и массивными бронзовыми дверями, отлитыми в Константинополе. Внутри покоятся мощи святого Андрея, покровителя города. Комплекс включает Базилику Распятия и Райский дворик. Совет: приходите пораньше (около 9:00), чтобы насладиться торжественной красотой до прибытия однодневных туристов.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Cathedral%20Duomo%20di%20Sant%20Andrea%20facade%20stairs",
                        rating: "4.5/5",
                        reviewCount: "4,300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d195006-Reviews-Duomo_di_Sant_Andrea-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "amalfi-elevator",
                        name: "Муниципальный лифт Амальфи",
                        tag: "Смотровая площадка",
                        tagline: "Лучшая панорама без подъема пешком",
                        gregorysTake: "Хотите лучший вид на Амальфи с высоты птичьего полета, не вспотев? Пропустите лестницу и воспользуйтесь этим секретным туннелем к уровню кладбища.",
                        fullDesc: "Это место предлагает бесспорно лучший вид на Амальфи сверху. Из Атрани идите в сторону Амальфи. Рядом с парковкой «Luna Rossa» вы найдете пешеходный туннель. Пройдите через него, поверните направо в конце и найдите ворота во второй туннель, ведущий к общественному лифту. Он поднимет вас на уровень монументального кладбища. Тишина там, в сочетании с видом на гавань и собор, захватывает дух.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Coast%20panoramic%20view%20from%20above%20sea%20cliffs",
                        rating: "4.0/5",
                        reviewCount: "20+",
                        links: {
                            googleMaps: "https://goo.gl/maps/XKX2UpeRBYQecQyj7",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d26860088-Reviews-Ascensore_per_il_Cimitero_Monumentale-Amalfi_Amalfi_Coast_Province_of_Salerno_C.html"
                        }
                    },
                    {
                        id: "secret-waterfall",
                        name: "Секретный водопад (Valle dei Mulini)",
                        tag: "Скрытая жемчужина",
                        tagline: "Древние руины и прохладные воды",
                        gregorysTake: "Настоящее скрытое место за частными виллами, куда добираются немногие туристы. Ощущение, будто попадаешь в сцену из «Книги джунглей» прямо в Амальфи.",
                        fullDesc: "Идите вверх по главной дороге в Амальфи (Via Capo di Piazza) до самого конца. Вы увидите частную виллу и закрытые ворота. Поверните налево и поднимитесь по ступенькам. Напротив виллы, в конце тропинки, вы обнаружите старые разрушенные водяные мельницы, большую пещеру и красивый водопад, ниспадающий вниз. Здесь прохладно, зелено и совершенно тихо по сравнению с шумной площадью.",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20waterfall%20Amalfi%20nature%20lush%20green",
                        rating: null,
                        reviewCount: null,
                        links: {
                            googleMaps: "https://goo.gl/maps/oNNm5mfiJ8bySLns9",
                            tripAdvisor: null
                        }
                    }
                ]
            },
            {
                id: "hiking",
                category: "Походы и Природа",
                items: [
                    {
                        id: "valle-delle-ferriere",
                        name: "Долина Феррьере (Valle delle Ferriere)",
                        tag: "Природный заповедник",
                        tagline: "Водопады и древняя история",
                        gregorysTake: "Сбегите от жары в пышный заповедник, похожий на парк Юрского периода. Этот легкий трек проведет вас через лимонные рощи и мимо промышленных руин к волшебным водопадам.",
                        fullDesc: "Valle delle Ferriere — это охраняемый природный заповедник, спрятанный в горах между Скалой и Амальфи. Название происходит от средневековых железоделательных заводов, которые когда-то здесь работали. Сегодня это святилище редких папоротников и бурной воды. Поход несложный (2-3 часа) и предлагает редкое тенистое убежище летом. Вы увидите руины старых бумажных фабрик, которые прославили Амальфи. Надевайте нескользящую обувь!",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20nature%20reserve%20Amalfi%20waterfall%20ferns",
                        rating: "4.5/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/fJq5Z1Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d3606622-Reviews-Valle_delle_Ferriere-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "torre-dello-ziro",
                        name: "Торре делло Дзиро (Torre dello Ziro)",
                        tag: "Лучший вид",
                        tagline: "История и невероятная панорама",
                        gregorysTake: "Если вы хотите тот самый кадр, глядя прямо вниз на крыши Атрани и Амальфи, это оно. Тихо, завораживающе красиво и гораздо меньше людей, чем на Тропе Богов.",
                        fullDesc: "Эта сторожевая башня стоит на хребте, разделяющем Амальфи и Атрани. Легенда гласит, что герцогиня Джованна д'Арагона была заключена здесь за свой скандальный роман. Тропа начинается от Понтоне и представляет собой приятную 30-40-минутную прогулку через сосновые леса. В отличие от других троп, здесь много тени. Вид с платформы рядом с башней, возможно, лучший на всем побережье.",
                        photo: "https://image.pollinations.ai/prompt/Torre%20dello%20Ziro%20watchtower%20Amalfi%20Coast%20view%20Atrani",
                        rating: "4.5/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d4819264-Reviews-Torre_dello_Ziro-Pontone_Scala_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "path-of-gods",
                        name: "Тропа Богов (Sentiero degli Dei)",
                        tag: "Пешеходная тропа",
                        tagline: "Всемирно известный маршрут",
                        gregorysTake: "Здесь много туристов не просто так — виды непревзойденные. Мой совет: начните в Бомерано и идите вниз к Ночелле, чтобы лучшие виды были перед вами.",
                        fullDesc: "Это самая известная пешеходная тропа на Амальфитанском побережье. Она проходит по горным хребтам высоко над морем. Вам нужно будет доехать на автобусе до Бомерано (Аджерола), чтобы начать. Тропа заканчивается в Ночелле, милой деревушке над Позитано. Оттуда будьте готовы к 1700 ступеням вниз до Позитано (или сядьте на автобус). Пейзаж меняется за каждым поворотом, открывая драматичные скалы и бесконечные морские виды.",
                        photo: "https://image.pollinations.ai/prompt/Path%20of%20the%20Gods%20Amalfi%20Coast%20hiking%20trail%20breathtaking%20view",
                        rating: "5.0/5",
                        reviewCount: "6,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/wsz6fGJJMjy",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187782-d596338-Reviews-Sentiero_degli_Dei-Positano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lemon-path",
                        name: "Тропа Лимонов (Sentiero dei Limoni)",
                        tag: "Пешеходная тропа",
                        tagline: "Ароматная прогулка, поцелованная солнцем",
                        gregorysTake: "Более легкая альтернатива горным походам. Эта тропа соединяет Майори и Минори и ведет прямо через сердце культуры выращивания лимонов в регионе.",
                        fullDesc: "Расположенная в одном из самых очаровательных мест побережья, «Тропа лимонов» вьется через террасные сады. Это легкая или средняя прогулка (около 1 часа), с которой открываются потрясающие виды на море и города внизу. В сезон вы можете увидеть фермеров, несущих на спинах тяжелые корзины с лимонами «Sfusato Amalfitano». Остановитесь, чтобы выпить свежего лимонада по пути!",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20lemon%20groves%20path%20yellow%20lemons%20sea%20background",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/pEuEERdx7SPheoSw8",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g580202-d12361093-Reviews-Sentiero_dei_Limoni-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "food",
                category: "Где поесть (Атрани и Амальфи)",
                items: [
                    {
                        id: "le-palme",
                        name: "Le Palme (Атрани)",
                        tag: "Семейный ресторан",
                        tagline: "Истинное гостеприимство и морепродукты",
                        gregorysTake: "Управляется братьями Армандо и Сальваторе с 1990 года, это место ощущается как дом. Мой лучший выбор для надежного, вкусного обеда, где обслуживание так же хорошо, как и еда.",
                        fullDesc: "Le Palme — это институт в Атрани. В то время как многие прибрежные рестораны борются за стабильность, Le Palme преуспевает. Не пропустите их фирменную пасту с фисташковым песто или паккери с морским окунем и грецкими орехами. Рыба на гриле всегда свежая. Атмосфера живая и семейная — в праздники вы даже можете увидеть, как дети братьев помогают. У них также есть отличные варианты без глютена.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20restaurant%20terrace%20Atrani%20Le%20Palme%20dining",
                        rating: "4.5/5",
                        reviewCount: "1,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/1usaXJbxcNJyosFdA",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1473698-Reviews-Le_Palme_Ristorante_Pizzeria-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "a-paranza",
                        name: "A'Paranza (Атрани)",
                        tag: "Выбор Мишлен",
                        tagline: "Изысканное превосходство морепродуктов",
                        gregorysTake: "Жемчужина, отмеченная Мишлен, которая остается скромной. Если вы гурман или инстаграммер в поисках идеального ризотто, это ваше место.",
                        fullDesc: "Включенный в гид Мишлен, A'Paranza посвящен качеству. Несмотря на скромный вид, каждая деталь продумана, от столовых приборов до местных лимонов, используемых в соусе. Их фирменное ризотто с кремом из скампи легендарно. Расположенный всего в 200 метрах от воды, они подают только свежайший улов. Винная карта обширна, а персонал — эксперты в пейринге.",
                        photo: "https://image.pollinations.ai/prompt/Gourmet%20seafood%20dish%20Amalfi%20Coast%20Michelin%20style",
                        rating: "4.5/5",
                        reviewCount: "600+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ZJcWN2TiNHCk3E7G6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034462-Reviews-A_Paranza-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "da-ciccio",
                        name: "Da Ciccio Cielo Mare Terra (Веттика/Амальфи)",
                        tag: "Легендарный ресторан",
                        tagline: "С грядки на стол с видом",
                        gregorysTake: "Историческое семейное место с 1931 года с невероятным гостеприимством. Воспользуйтесь их бесплатным трансфером из Амальфи — это делает логистику легкой.",
                        fullDesc: "Расположенный в Веттике (прямо над Амальфи), Da Ciccio — это институт. Они выращивают свой собственный огород, что означает, что продукты на вашей тарелке — с нулевого километра. Они подают, пожалуй, лучшее карпаччо из рыбы на побережье. Но настоящая изюминка — это тепло семейного управления; к вам относятся как к старому другу.",
                        photo: "https://image.pollinations.ai/prompt/Da%20Ciccio%20Amalfi%20restaurant%20terrace%20sea%20view%20food",
                        rating: "4.5/5",
                        reviewCount: "1,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d1154564-Reviews-Da_Ciccio_Cielo_Mare_Terra-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "le-arcate",
                        name: "Le Arcate (Атрани)",
                        tag: "Ужин у моря",
                        tagline: "Лучшие места в городе",
                        gregorysTake: "Местоположение, местоположение, местоположение. Если вы хотите поесть прямо у кромки воды в Атрани, бронируйте столик здесь. Любимое место знаменитостей, таких как Эдвард Нортон, за его приватность и вид.",
                        fullDesc: "Le Arcate — любимое местное место для тех, кто хочет лучшие места в Атрани. Управляемое сплоченной семьей, меню остается практически неизменным с 1965 года, фокусируясь на простых, качественных традициях. Как говорит шеф-повар: «Я просто солю и перчу рыбу. Я не делаю ее лучше, я делаю ее такой, какой она должна быть». Примечание: с 2024 года они сосредоточены на ресторанном обслуживании и могут не подавать пиццу.",
                        photo: "https://image.pollinations.ai/prompt/Restaurant%20Le%20Arcate%20Atrani%20sea%20view%20tables",
                        rating: "4.0/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/xKN3G21T2BLzhMbG7",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034463-Reviews-Le_Arcate-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "apicella-bakery",
                        name: "Пекарня Apicella (Амальфи)",
                        tag: "Уличная еда / Завтрак",
                        tagline: "Секретная пицца на завтрак от местных",
                        gregorysTake: "Пропустите завтрак в отеле. Сделайте как местные и возьмите кусок красной пиццы здесь. Это скромно, дешево и абсолютно вкусно.",
                        fullDesc: "Спрятанная всего в 70 метрах от Дуомо Амальфи, эту пекарню легко пропустить, но невозможно забыть. Это место только на вынос, открытое в основном по утрам. Это главная остановка для школьников и рабочих. Здесь нет сидячих мест, но вкус их хлеба и кусков пиццы — самый аутентичный, который вы найдете в центре города.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20bakery%20pizza%20focaccia%20Amalfi%20morning",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bWSK37czwKoPSdC36",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d4778107-Reviews-Panificio_Apicella-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "la-rua",
                        name: "La Rua Pizze E Delizie (Амальфи)",
                        tag: "Уличная еда",
                        tagline: "Аранчини и закуски из дровяной печи",
                        gregorysTake: "Идеальное место для быстрого перекуса во время прогулки по переулкам. Их аранчини — хрустящее совершенство.",
                        fullDesc: "Расположенная в сердце Амальфи, La Rua предлагает больше, чем просто уличную еду; они подают исключительную пиццу из дровяной печи, приготовленную с точностью. Аромат свежеиспеченного теста затягивает вас. Это также отличное место, чтобы попробовать традиционные жареные закуски, такие как крокке (картофельные крокеты) и аранчини. Скрытая кулинарная жемчужина для непринужденного обеда.",
                        photo: "https://image.pollinations.ai/prompt/Arancini%20Italian%20street%20food%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "200+",
                        links: {
                            googleMaps: "https://goo.gl/maps/jwgUvMgD3NqxErhs5",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d23896504-Reviews-La_Rua_Pizze_E_Delizie-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "not_only",
                category: "Не только Амальфи",
                items: [
                    {
                        id: "ravello-infinity",
                        name: "Равелло - Терраса Бесконечности",
                        tag: "Достопримечательность",
                        tagline: "Вид на всю жизнь",
                        gregorysTake: "Равелло — это балкон мира. Терраса Бесконечности, пожалуй, самое фотографируемое место на побережье — вы почувствуете, что парите между морем и небом.",
                        fullDesc: "Равелло находится высоко на скалах, примерно в 20 минутах езды на автобусе от Амальфи. Жемчужиной является Вилла Чимброне и ее «Terrazza dell'Infinito». Уставленная мраморными бюстами и выходящая на Тирренское море, она предлагает панораму, которая вдохновляла писателей и кинематографистов (видели в «Доводе» и «Чудо-женщине»). Это место обязательно к посещению хотя бы ради садов.",
                        photo: "https://image.pollinations.ai/prompt/Villa%20Cimbrone%20Infinity%20Terrace%20Ravello%20statues%20sea%20view",
                        rating: "4.5/5",
                        reviewCount: "2,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d245903-Reviews-Villa_Cimbrone_Gardens-Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "sal-de-riso",
                        name: "Sal De Riso (Минори)",
                        tag: "Кондитерская",
                        tagline: "Лучшая выпечка в мире",
                        gregorysTake: "Саль Де Ризо — не просто кондитер; он знаменитость. Вы не можете уехать с побережья, не попробовав его «Delizia al Limone» или торт «Ricotta e Pere».",
                        fullDesc: "Расположенный в Минори, это храм сладости. Мастер-кондитер Саль Де Ризо имеет более 30 лет опыта. Магазин яркий и оживленный, предлагающий огромный выбор тортов, джелато и выпечки, приготовленных из местных ингредиентов, таких как фундук Джиффони и лимоны Амальфи. Это также отличное место для аперитива.",
                        photo: "https://image.pollinations.ai/prompt/Sal%20De%20Riso%20pastries%20lemon%20delight%20Minori",
                        rating: "4.0/5",
                        reviewCount: "4,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9nKrLusvyTwxasxV6",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g580202-d3184471-Reviews-Pasticceria_Sal_De_Riso-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "al-valico",
                        name: "Al Valico di Chiunzi (Трамонти)",
                        tag: "Ужин в горах",
                        tagline: "Деревенская еда с видом на Везувий",
                        gregorysTake: "Хотите увидеть, где местные едят по воскресеньям? Отправляйтесь в горы. Воздух прохладнее, а пиццы буквально метровой длины.",
                        fullDesc: "Расположенное на горном перевале (Valico di Chiunzi) примерно в 3000 футов над уровнем моря, это место предлагает панорамный вид, уходящий вдаль. Ресторан славится своей «Pizza a Metro» (метровая пицца) и сытными мясными блюдами. Это популярная остановка для туристов и тех, кто хочет сбежать от прибрежной влажности.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20pizza%20meter%20long%20Tramonti%20wood%20oven",
                        rating: "4.0/5",
                        reviewCount: "300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/4AXTXoaMm7hJpbMr6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635618-d3184320-Reviews-Al_Valico_di_Chiunzi-Tramonti_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "marina-di-praia",
                        name: "Марина ди Прая (Праяно)",
                        tag: "Пляж / Релакс",
                        tagline: "Солнце, скалы и спагетти",
                        gregorysTake: "Часто упоминается опытными путешественниками как лучшее место для «чилла». Никакого гламура, просто крошечный пляж, зажатый между массивными скалами, с отличной едой прямо на камнях.",
                        fullDesc: "В отличие от Позитано, у Марина ди Прая расслабленная душа. Пляж расположен в устье ущелья в Праяно. Сюда можно добраться на машине или автобусе. Солнце уходит отсюда рано из-за скал, поэтому это идеально подходит для утреннего купания, за которым следует долгий ленивый обед в одной из прибрежных тратторий (например, Bar Mare Petit).",
                        photo: "https://image.pollinations.ai/prompt/Marina%20di%20Praia%20beach%20cliffs%20boats%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194868-d590479-Reviews-Marina_di_Praia_Beach-Praiano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lido-degli-artisti",
                        name: "Лидо дельи Артисти (Амальфи)",
                        tag: "Пляжный клуб",
                        tagline: "Доступ только на лодке или по лестнице",
                        gregorysTake: "Потрясающе красивое место, которое кажется эксклюзивным. Возьмите лодочный трансфер из гавани Амальфи для полного впечатления.",
                        fullDesc: "Известный своими кристально чистыми водами и расслабляющей атмосферой, этот пляж — жемчужина. Он предлагает захватывающие виды на Средиземное море и оборудован шезлонгами и рестораном. Он назван в честь художников (таких как живописец Иван Айвазовский), которые вдохновлялись этим конкретным морским пейзажем.",
                        photo: "https://image.pollinations.ai/prompt/Lido%20degli%20Artisti%20Amalfi%20beach%20umbrellas%20sea",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bomxs99HVDxbcdqD6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g187780-d4543923-Reviews-Lido_Degli_Artisti-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            }
        ],
        ES: [
            {
                id: "places",
                category: "Lugares en Atrani y Amalfi",
                items: [
                    {
                        id: "square-atrani",
                        name: "Plaza en Atrani (Piazzetta Umberto I)",
                        tag: "Punto fotográfico / Atmósfera",
                        tagline: "El auténtico corazón del pueblo",
                        gregorysTake: "Sigue las flechas verdes a través del pueblo para descubrir esta plaza cinematográfica. Es el lugar perfecto para escapar de las multitudes de Amalfi y capturar la verdadera alma de la costa.",
                        fullDesc: "A lo largo de Atrani, verás señales con prominentes flechas verdes; en realidad son marcadores de evacuación por inundaciones, pero para nosotros, son guías hacia la belleza. Siguiéndolas llegarás a la encantadora Piazzetta Umberto I, justo frente a la iglesia de San Salvatore de' Birecto. Es íntima, rodeada de casas tradicionales, y sirve como la sala de estar de los lugareños. Tómate un café aquí y observa pasar el mundo; es una vista característica que encarna la esencia de Atrani.",
                        photo: "https://amalfi.day/wp-content/uploads/2023/03/2-atrani-new-photos-aquarelle.webp",
                        rating: "4.5/5",
                        reviewCount: "250+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9QEVNhZqFHJsQDVRA",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g635619-d6849968-Reviews-Collegiate_Santa_Maria_Maddalena-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "castiglione-beach",
                        name: "Playa de Castiglione (Lido di Ravello)",
                        tag: "Playa escondida",
                        tagline: "Serenidad entre los acantilados",
                        gregorysTake: "Un secreto pintoresco ubicado entre imponentes acantilados, a solo un corto paseo de Atrani. Requiere algo de esfuerzo llegar, lo que mantiene alejadas a las grandes multitudes.",
                        fullDesc: "Ubicado entre dos acantilados dramáticos se encuentra este lugar pintoresco, a poca distancia más allá de la plaza de Atrani. Para llegar a este lugar idílico, continúa por la carretera principal y busca la entrada con una escalera. Prepárate: es un descenso de aproximadamente 200 escalones para llegar al agua, pero el mar cristalino y la vista de la iglesia de Maddalena desde abajo valen cada paso.",
                        photo: "https://image.pollinations.ai/prompt/Castiglione%20Beach%20Amalfi%20Coast%20scenic%20view%20blue%20water",
                        rating: "4.0/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ErtYNHAQwcpwQQMn7",
                            tripAdvisor: "https://www.tripadvisor.it/Attraction_Review-g12079897-d10714192-Reviews-Lido_di_Ravello-Castiglione_Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "duomo-amalfi",
                        name: "Duomo di Sant’Andrea (Catedral de Amalfi)",
                        tag: "Hito histórico",
                        tagline: "El icono de Amalfi",
                        gregorysTake: "No puedes visitar Amalfi sin ver el Duomo. Su escalera de 62 escalones es legendaria, pero la verdadera magia es el tranquilo Claustro del Paraíso en el interior.",
                        fullDesc: "El Duomo es el corazón arquitectónico de Amalfi, que data del siglo IX. Este majestuoso edificio cuenta con una escalera dramática, una llamativa fachada árabe-normanda y enormes puertas de bronce fundidas en Constantinopla. En el interior yacen las reliquias de San Andrés, el santo patrón. El complejo incluye la Basílica del Crucifijo y el Claustro del Paraíso. Consejo: Llega temprano (alrededor de las 9:00 a. m.) para experimentar la solemne belleza antes de que lleguen los excursionistas.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Cathedral%20Duomo%20di%20Sant%20Andrea%20facade%20stairs",
                        rating: "4.5/5",
                        reviewCount: "4,300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d195006-Reviews-Duomo_di_Sant_Andrea-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "amalfi-elevator",
                        name: "Ascensor Municipal de Amalfi",
                        tag: "Mirador",
                        tagline: "El mejor panorama sin la caminata",
                        gregorysTake: "¿Quieres la mejor vista de pájaro de Amalfi sin sudar? Sáltate las escaleras y toma este túnel secreto al nivel del cementerio.",
                        fullDesc: "Esta ubicación ofrece indiscutiblemente la mejor vista de Amalfi desde arriba. Desde Atrani, camina hacia Amalfi. Cerca del estacionamiento \"Luna Rossa\", encontrarás un túnel peatonal. Camina a través de él, gira a la derecha al final y encuentra la puerta a un segundo túnel que conduce al ascensor público. Te lleva al nivel del cementerio monumental. El silencio allí arriba, combinado con la vista del puerto y la catedral, es impresionante.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Coast%20panoramic%20view%20from%20above%20sea%20cliffs",
                        rating: "4.0/5",
                        reviewCount: "20+",
                        links: {
                            googleMaps: "https://goo.gl/maps/XKX2UpeRBYQecQyj7",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d26860088-Reviews-Ascensore_per_il_Cimitero_Monumentale-Amalfi_Amalfi_Coast_Province_of_Salerno_C.html"
                        }
                    },
                    {
                        id: "secret-waterfall",
                        name: "Cascada Secreta (Valle dei Mulini)",
                        tag: "Joya oculta",
                        tagline: "Ruinas antiguas y aguas refrescantes",
                        gregorysTake: "Un verdadero lugar escondido detrás de las villas privadas donde pocos turistas se aventuran. Se siente como entrar en una escena de 'El libro de la selva' justo en Amalfi.",
                        fullDesc: "Sube por la carretera principal de Amalfi (Via Capo di Piazza) hasta el final. Verás una villa privada y una puerta cerrada. Gira a la izquierda y sube los escalones. Frente a la villa, al final del camino, descubrirás viejos molinos de agua en ruinas, una gran cueva y una hermosa cascada que cae debajo. Es fresco, verde y completamente silencioso en comparación con la concurrida plaza.",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20waterfall%20Amalfi%20nature%20lush%20green",
                        rating: null,
                        reviewCount: null,
                        links: {
                            googleMaps: "https://goo.gl/maps/oNNm5mfiJ8bySLns9",
                            tripAdvisor: null
                        }
                    }
                ]
            },
            {
                id: "hiking",
                category: "Senderismo y Naturaleza",
                items: [
                    {
                        id: "valle-delle-ferriere",
                        name: "Valle delle Ferriere",
                        tag: "Reserva Natural",
                        tagline: "Cascadas e historia antigua",
                        gregorysTake: "Escapa del calor en una reserva exuberante, parecida al Jurásico. Esta caminata fácil te lleva a través de limoneros y ruinas industriales hasta cascadas mágicas.",
                        fullDesc: "Valle delle Ferriere es una reserva natural protegida escondida en las montañas entre Scala y Amalfi. El nombre proviene de las ferrerías medievales que una vez operaron aquí. Hoy, es un santuario de helechos raros y agua corriente. La caminata es manejable (2-3 horas) y ofrece un raro refugio sombreado durante el verano. Verás las ruinas de las antiguas fábricas de papel que hicieron famosa a Amalfi. ¡Usa zapatos antideslizantes!",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20nature%20reserve%20Amalfi%20waterfall%20ferns",
                        rating: "4.5/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/fJq5Z1Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d3606622-Reviews-Valle_delle_Ferriere-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "torre-dello-ziro",
                        name: "Torre dello Ziro",
                        tag: "Mejor vista",
                        tagline: "Historia y el panorama definitivo",
                        gregorysTake: "Si quieres esa foto específica mirando directamente hacia los tejados de Atrani y Amalfi, esta es. Tranquilo, inquietantemente hermoso y mucho menos concurrido que el Sendero de los Dioses.",
                        fullDesc: "Esta torre de vigilancia se encuentra en la cresta que separa Amalfi y Atrani. La leyenda dice que la duquesa Giovanna d'Aragona fue encarcelada aquí por su escandaloso romance. El sendero comienza en Pontone y es un agradable paseo de 30-40 minutos a través de bosques de pinos. A diferencia de otros senderos, ofrece mucha sombra. La vista desde la plataforma junto a la torre es posiblemente la mejor de toda la costa.",
                        photo: "https://image.pollinations.ai/prompt/Torre%20dello%20Ziro%20watchtower%20Amalfi%20Coast%20view%20Atrani",
                        rating: "4.5/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d4819264-Reviews-Torre_dello_Ziro-Pontone_Scala_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "path-of-gods",
                        name: "Sendero de los Dioses (Sentiero degli Dei)",
                        tag: "Ruta de senderismo",
                        tagline: "La caminata mundialmente famosa",
                        gregorysTake: "Es turístico por una razón: las vistas son inigualables. Mi consejo: comienza en Bomerano y camina hacia Nocelle para mantener las mejores vistas frente a ti.",
                        fullDesc: "Esta es la ruta de senderismo más famosa de la Costa Amalfitana. Corre a lo largo de las crestas de las montañas muy por encima del mar. Tendrás que tomar un autobús a Bomerano (Agerola) para comenzar. El sendero termina en Nocelle, un lindo pueblo sobre Positano. Desde allí, prepárate para 1,700 escalones hasta Positano (o toma el autobús). El paisaje cambia en cada esquina, ofreciendo acantilados dramáticos y vistas interminables al mar.",
                        photo: "https://image.pollinations.ai/prompt/Path%20of%20the%20Gods%20Amalfi%20Coast%20hiking%20trail%20breathtaking%20view",
                        rating: "5.0/5",
                        reviewCount: "6,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/wsz6fGJJMjy",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187782-d596338-Reviews-Sentiero_degli_Dei-Positano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lemon-path",
                        name: "El Sendero de los Limones (Sentiero dei Limoni)",
                        tag: "Ruta de senderismo",
                        tagline: "Un paseo fragante besado por el sol",
                        gregorysTake: "Una alternativa más fácil a las caminatas de montaña. Este camino conecta Maiori y Minori y te lleva directamente a través del corazón de la cultura del cultivo de limón de la región.",
                        fullDesc: "Ubicado en uno de los lugares más fascinantes de la costa, el \"Sendero de los Limones\" serpentea a través de jardines en terrazas. Es una caminata fácil a moderada (aproximadamente 1 hora) que ofrece impresionantes vistas sobre el mar y los pueblos de abajo. En temporada, es posible que veas a los agricultores cargando pesadas cestas de limones \"Sfusato Amalfitano\" en sus espaldas. ¡Detente para tomar una limonada fresca en el camino!",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20lemon%20groves%20path%20yellow%20lemons%20sea%20background",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/pEuEERdx7SPheoSw8",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g580202-d12361093-Reviews-Sentiero_dei_Limoni-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "food",
                category: "Lugares para Comer (Atrani y Amalfi)",
                items: [
                    {
                        id: "le-palme",
                        name: "Le Palme (Atrani)",
                        tag: "Restaurante familiar",
                        tagline: "Hospitalidad auténtica y mariscos",
                        gregorysTake: "Dirigido por los hermanos Armando y Salvatore desde 1990, este lugar se siente como en casa. Es mi mejor elección para una comida confiable y deliciosa donde el servicio es tan bueno como la comida.",
                        fullDesc: "Le Palme es una institución en Atrani. Mientras que muchos restaurantes costeros luchan con la consistencia, Le Palme sobresale. No te pierdas su pasta exclusiva con pesto de pistacho o los paccheri con gallineta y nueces. El marisco a la parrilla siempre es fresco. El ambiente es animado y orientado a la familia; durante las vacaciones, incluso podrías ver a los hijos de los hermanos ayudando. También ofrecen excelentes opciones sin gluten.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20restaurant%20terrace%20Atrani%20Le%20Palme%20dining",
                        rating: "4.5/5",
                        reviewCount: "1,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/1usaXJbxcNJyosFdA",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1473698-Reviews-Le_Palme_Ristorante_Pizzeria-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "a-paranza",
                        name: "A'Paranza (Atrani)",
                        tag: "Selección Michelin",
                        tagline: "Excelencia refinada en mariscos",
                        gregorysTake: "Una joya seleccionada por Michelin que sigue siendo humilde. Si eres un amante de la comida o un Instagrammer que busca el risotto perfecto, este es tu lugar.",
                        fullDesc: "Incluido en la Guía Michelin, A'Paranza se dedica a la calidad. A pesar de su apariencia sencilla, cada detalle está cuidado, desde los cubiertos hasta los limones locales utilizados en la salsa. Su exclusivo Risotto con crema di scampi es legendario. Ubicado a solo 200 metros del agua, sirven solo la pesca más fresca. La carta de vinos es extensa y el personal es experto en maridaje.",
                        photo: "https://image.pollinations.ai/prompt/Gourmet%20seafood%20dish%20Amalfi%20Coast%20Michelin%20style",
                        rating: "4.5/5",
                        reviewCount: "600+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ZJcWN2TiNHCk3E7G6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034462-Reviews-A_Paranza-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "da-ciccio",
                        name: "Da Ciccio Cielo Mare Terra (Vettica/Amalfi)",
                        tag: "Restaurante legendario",
                        tagline: "De la huerta a la mesa con vista",
                        gregorysTake: "Un lugar histórico de gestión familiar desde 1931 con una hospitalidad increíble. Utiliza su servicio de transporte gratuito desde Amalfi: hace que la logística sea sencilla.",
                        fullDesc: "Ubicado en Vettica (justo encima de Amalfi), Da Ciccio es una institución. Cultivan su propio huerto, lo que significa que el producto en tu plato es de kilómetro cero. Sirven quizás el mejor carpaccio de pescado de la costa. Pero lo más destacado es la calidez de la gestión familiar; te tratan como a un viejo amigo.",
                        photo: "https://image.pollinations.ai/prompt/Da%20Ciccio%20Amalfi%20restaurant%20terrace%20sea%20view%20food",
                        rating: "4.5/5",
                        reviewCount: "1,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d1154564-Reviews-Da_Ciccio_Cielo_Mare_Terra-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "le-arcate",
                        name: "Le Arcate (Atrani)",
                        tag: "Cena frente al mar",
                        tagline: "Los mejores asientos de la ciudad",
                        gregorysTake: "Ubicación, ubicación, ubicación. Si quieres comer justo al borde del agua en Atrani, reserva una mesa aquí. Un favorito de celebridades como Edward Norton por su privacidad y vista.",
                        fullDesc: "Le Arcate es un lugar local querido para aquellos que quieren los mejores asientos en Atrani. Gestionado por una familia muy unida, el menú se ha mantenido prácticamente sin cambios desde 1965, centrándose en la tradición simple y de alta calidad. Como dice el chef: \"Solo pongo sal y pimienta al pescado. No lo hago mejor, lo hago como debe ser\". Nota: A partir de 2024, se centran en el servicio de restaurante y es posible que no sirvan pizza.",
                        photo: "https://image.pollinations.ai/prompt/Restaurant%20Le%20Arcate%20Atrani%20sea%20view%20tables",
                        rating: "4.0/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/xKN3G21T2BLzhMbG7",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034463-Reviews-Le_Arcate-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "apicella-bakery",
                        name: "Panadería Apicella (Amalfi)",
                        tag: "Comida callejera / Desayuno",
                        tagline: "La pizza de desayuno secreta de los lugareños",
                        gregorysTake: "Sáltate el desayuno del hotel. Haz como los lugareños y toma una porción de pizza roja aquí. Es sencillo, barato y absolutamente delicioso.",
                        fullDesc: "Escondida a solo 70 metros del Duomo de Amalfi, esta panadería es fácil de pasar por alto pero imposible de olvidar. Es un lugar solo para llevar abierto principalmente por las mañanas. Es la parada obligada para estudiantes y trabajadores. No hay asientos, pero el sabor de su pan y porciones de pizza es el más auténtico que encontrarás en el centro de la ciudad.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20bakery%20pizza%20focaccia%20Amalfi%20morning",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bWSK37czwKoPSdC36",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d4778107-Reviews-Panificio_Apicella-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "la-rua",
                        name: "La Rua Pizze E Delizie (Amalfi)",
                        tag: "Comida callejera",
                        tagline: "Arancini y bocadillos al horno de leña",
                        gregorysTake: "El lugar perfecto para un bocado rápido mientras exploras los callejones. Sus arancini son perfección crujiente.",
                        fullDesc: "Ubicado en el corazón de Amalfi, La Rua ofrece más que solo comida callejera; sirven pizzas excepcionales al horno de leña preparadas con precisión. El aroma de la masa recién horneada te atrae. También es un gran lugar para probar bocadillos fritos tradicionales como crocche (croquetas de patata) y arancini. Una joya culinaria escondida para un almuerzo informal.",
                        photo: "https://image.pollinations.ai/prompt/Arancini%20Italian%20street%20food%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "200+",
                        links: {
                            googleMaps: "https://goo.gl/maps/jwgUvMgD3NqxErhs5",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d23896504-Reviews-La_Rua_Pizze_E_Delizie-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "not_only",
                category: "No Solo Amalfi",
                items: [
                    {
                        id: "ravello-infinity",
                        name: "Ravello - Terraza del Infinito",
                        tag: "Turismo",
                        tagline: "La vista de tu vida",
                        gregorysTake: "Ravello es el balcón del mundo. La Terraza del Infinito es posiblemente el lugar más fotografiado de la costa: sentirás que estás flotando entre el mar y el cielo.",
                        fullDesc: "Ravello se encuentra en lo alto de los acantilados, a unos 20 minutos en autobús de Amalfi. La joya de la corona es Villa Cimbrone y su \"Terrazza dell'Infinito\". Bordeada de bustos de mármol y con vistas al mar Tirreno, ofrece un panorama que ha inspirado a escritores y cineastas (visto en Tenet y Wonder Woman). Es una visita obligada solo por los jardines.",
                        photo: "https://image.pollinations.ai/prompt/Villa%20Cimbrone%20Infinity%20Terrace%20Ravello%20statues%20sea%20view",
                        rating: "4.5/5",
                        reviewCount: "2,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d245903-Reviews-Villa_Cimbrone_Gardens-Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "sal-de-riso",
                        name: "Sal De Riso (Minori)",
                        tag: "Pastelería",
                        tagline: "Los mejores pasteles del mundo",
                        gregorysTake: "Sal De Riso no es solo un pastelero; es una celebridad. No puedes irte de la costa sin probar su \"Delizia al Limone\" o el pastel \"Ricotta e Pere\".",
                        fullDesc: "Ubicado en Minori, este es un templo de la dulzura. El maestro pastelero Sal De Riso tiene más de 30 años de experiencia. La tienda es vibrante y concurrida, ofreciendo una selección masiva de pasteles, helados y dulces hechos con ingredientes locales como avellanas de Giffoni y limones de Amalfi. También es un gran lugar para un aperitivo.",
                        photo: "https://image.pollinations.ai/prompt/Sal%20De%20Riso%20pastries%20lemon%20delight%20Minori",
                        rating: "4.0/5",
                        reviewCount: "4,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9nKrLusvyTwxasxV6",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g580202-d3184471-Reviews-Pasticceria_Sal_De_Riso-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "al-valico",
                        name: "Al Valico di Chiunzi (Tramonti)",
                        tag: "Cena en la montaña",
                        tagline: "Comida rústica con vista al Vesubio",
                        gregorysTake: "¿Quieres ver dónde comen los lugareños los domingos? Sube a las montañas. El aire es más fresco y las pizzas son literalmente de un metro de largo.",
                        fullDesc: "Ubicado en un paso de montaña (Valico di Chiunzi) a unos 3,000 pies sobre el nivel del mar, este lugar ofrece una vista panorámica que se extiende a lo lejos. El restaurante es famoso por su \"Pizza a Metro\" (pizza de un metro de largo) y abundantes platos de carne. Es una parada popular para excursionistas y aquellos que quieren escapar de la humedad costera.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20pizza%20meter%20long%20Tramonti%20wood%20oven",
                        rating: "4.0/5",
                        reviewCount: "300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/4AXTXoaMm7hJpbMr6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635618-d3184320-Reviews-Al_Valico_di_Chiunzi-Tramonti_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "marina-di-praia",
                        name: "Marina di Praia (Praiano)",
                        tag: "Playa / Relax",
                        tagline: "Sol, acantilados y espaguetis",
                        gregorysTake: "A menudo citado por viajeros experimentados como el mejor lugar para \"relajarse\". Sin glamour, solo una pequeña playa encajada entre enormes acantilados con excelente comida justo en las piedras.",
                        fullDesc: "A diferencia de Positano, Marina di Praia tiene un alma relajada. La playa se encuentra en la desembocadura de un desfiladero en Praiano. Es accesible en coche o autobús. El sol se va temprano aquí debido a los acantilados, por lo que es perfecto para un baño matutino seguido de un largo y perezoso almuerzo en una de las trattorias junto a la playa (como Bar Mare Petit).",
                        photo: "https://image.pollinations.ai/prompt/Marina%20di%20Praia%20beach%20cliffs%20boats%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194868-d590479-Reviews-Marina_di_Praia_Beach-Praiano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lido-degli-artisti",
                        name: "Lido degli Artisti (Amalfi)",
                        tag: "Club de playa",
                        tagline: "Accesible solo en barco o escaleras",
                        gregorysTake: "Un lugar increíblemente hermoso que se siente exclusivo. Toma el servicio de transporte en barco desde el puerto de Amalfi para la experiencia completa.",
                        fullDesc: "Reconocido por sus aguas cristalinas y ambiente relajante, esta playa es una joya. Ofrece impresionantes vistas del Mediterráneo y está equipada con tumbonas y un restaurante. Lleva el nombre de los artistas (como el pintor Ivan Aivazovsky) que se inspiraron en este paisaje marino específico.",
                        photo: "https://image.pollinations.ai/prompt/Lido%20degli%20Artisti%20Amalfi%20beach%20umbrellas%20sea",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bomxs99HVDxbcdqD6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g187780-d4543923-Reviews-Lido_Degli_Artisti-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            }


        ],
        FR: [
            {
                id: "places",
                category: "Lieux à Atrani et Amalfi",
                items: [
                    {
                        id: "square-atrani",
                        name: "Place à Atrani (Piazzetta Umberto I)",
                        tag: "Spot photo / Atmosphère",
                        tagline: "Le cœur authentique du village",
                        gregorysTake: "Suivez les flèches vertes à travers le village pour découvrir cette place cinématographique. C'est l'endroit idéal pour échapper à la foule d'Amalfi et capturer la véritable âme de la côte.",
                        fullDesc: "Partout à Atrani, vous verrez des panneaux avec des flèches vertes bien visibles ; ce sont en fait des marqueurs d'évacuation en cas d'inondation, mais pour nous, ce sont des guides vers la beauté. En les suivant, vous arrivez à la charmante Piazzetta Umberto I, juste en face de l'église San Salvatore de' Birecto. Elle est intime, entourée de maisons traditionnelles, et sert de salon aux habitants. Prenez un café ici et regardez le monde passer ; c'est une vue emblématique qui incarne l'essence d'Atrani.",
                        photo: "https://amalfi.day/wp-content/uploads/2023/03/2-atrani-new-photos-aquarelle.webp",
                        rating: "4.5/5",
                        reviewCount: "250+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9QEVNhZqFHJsQDVRA",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g635619-d6849968-Reviews-Collegiate_Santa_Maria_Maddalena-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "castiglione-beach",
                        name: "Plage de Castiglione (Lido di Ravello)",
                        tag: "Plage cachée",
                        tagline: "Sérénité entre les falaises",
                        gregorysTake: "Un secret pittoresque niché entre des falaises imposantes, à quelques pas d'Atrani. Il faut un certain effort pour l'atteindre, ce qui éloigne les grandes foules.",
                        fullDesc: "Nichée entre deux falaises spectaculaires se trouve cet endroit pittoresque, juste un peu plus loin que la place d'Atrani. Pour atteindre ce lieu idyllique, continuez sur la route principale et cherchez l'entrée avec un escalier. Soyez prêt : c'est une descente d'environ 200 marches pour atteindre l'eau, mais la mer cristalline et la vue sur l'église de la Madeleine d'en bas valent chaque pas.",
                        photo: "https://image.pollinations.ai/prompt/Castiglione%20Beach%20Amalfi%20Coast%20scenic%20view%20blue%20water",
                        rating: "4.0/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ErtYNHAQwcpwQQMn7",
                            tripAdvisor: "https://www.tripadvisor.it/Attraction_Review-g12079897-d10714192-Reviews-Lido_di_Ravello-Castiglione_Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "duomo-amalfi",
                        name: "Duomo di Sant’Andrea (Cathédrale d'Amalfi)",
                        tag: "Monument historique",
                        tagline: "L'icône d'Amalfi",
                        gregorysTake: "Vous ne pouvez pas visiter Amalfi sans voir le Duomo. Son escalier de 62 marches est légendaire, mais la vraie magie est le paisible Cloître du Paradis à l'intérieur.",
                        fullDesc: "Le Duomo est le cœur architectural d'Amalfi, datant du IXe siècle. Ce bâtiment majestueux présente un escalier spectaculaire, une façade arabo-normande frappante et des portes en bronze massives coulées à Constantinople. À l'intérieur reposent les reliques de Saint André, le saint patron. Le complexe comprend la Basilique du Crucifix et le Cloître du Paradis. Conseil : Arrivez tôt (vers 9h00) pour découvrir la beauté solennelle avant l'arrivée des excursionnistes.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Cathedral%20Duomo%20di%20Sant%20Andrea%20facade%20stairs",
                        rating: "4.5/5",
                        reviewCount: "4,300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d195006-Reviews-Duomo_di_Sant_Andrea-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "amalfi-elevator",
                        name: "Ascenseur municipal d'Amalfi",
                        tag: "Point de vue",
                        tagline: "Le meilleur panorama sans la randonnée",
                        gregorysTake: "Vous voulez la meilleure vue plongeante sur Amalfi sans transpirer ? Évitez les escaliers et prenez ce tunnel secret vers le niveau du cimetière.",
                        fullDesc: "Cet endroit offre incontestablement la meilleure vue sur Amalfi d'en haut. Depuis Atrani, marchez vers Amalfi. Près du parking \"Luna Rossa\", vous trouverez un tunnel piétonnier. Traversez-le, tournez à droite au bout et trouvez la porte d'un deuxième tunnel menant à l'ascenseur public. Il vous emmène au niveau du cimetière monumental. Le silence là-haut, combiné à la vue sur le port et la cathédrale, est à couper le souffle.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Coast%20panoramic%20view%20from%20above%20sea%20cliffs",
                        rating: "4.0/5",
                        reviewCount: "20+",
                        links: {
                            googleMaps: "https://goo.gl/maps/XKX2UpeRBYQecQyj7",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d26860088-Reviews-Ascensore_per_il_Cimitero_Monumentale-Amalfi_Amalfi_Coast_Province_of_Salerno_C.html"
                        }
                    },
                    {
                        id: "secret-waterfall",
                        name: "Cascade secrète (Valle dei Mulini)",
                        tag: "Joyau caché",
                        tagline: "Ruines antiques et eaux rafraîchissantes",
                        gregorysTake: "Un véritable endroit caché derrière les villas privées où peu de touristes s'aventurent. On a l'impression d'entrer dans une scène du 'Livre de la jungle' en plein Amalfi.",
                        fullDesc: "Montez la route principale d'Amalfi (Via Capo di Piazza) jusqu'au bout. Vous verrez une villa privée et un portail fermé. Tournez à gauche et montez les marches. En face de la villa, au bout du chemin, vous découvrirez de vieux moulins à eau en ruine, une grande grotte et une belle cascade en contrebas. C'est frais, vert et complètement silencieux par rapport à la place animée.",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20waterfall%20Amalfi%20nature%20lush%20green",
                        rating: null,
                        reviewCount: null,
                        links: {
                            googleMaps: "https://goo.gl/maps/oNNm5mfiJ8bySLns9",
                            tripAdvisor: null
                        }
                    }
                ]
            },
            {
                id: "hiking",
                category: "Randonnée et Nature",
                items: [
                    {
                        id: "valle-delle-ferriere",
                        name: "Valle delle Ferriere",
                        tag: "Réserve naturelle",
                        tagline: "Cascades et histoire ancienne",
                        gregorysTake: "Échappez à la chaleur dans une réserve luxuriante, semblable au Jurassique. Cette randonnée facile vous emmène à travers des citronniers et des ruines industrielles jusqu'à des cascades magiques.",
                        fullDesc: "Valle delle Ferriere est une réserve naturelle protégée cachée dans les montagnes entre Scala et Amalfi. Le nom vient des forges médiévales qui fonctionnaient ici autrefois. Aujourd'hui, c'est un sanctuaire de fougères rares et d'eau vive. La randonnée est gérable (2-3 heures) et offre un rare refuge ombragé en été. Vous verrez les ruines des anciennes papeteries qui ont rendu Amalfi célèbre. Portez des chaussures antidérapantes !",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20nature%20reserve%20Amalfi%20waterfall%20ferns",
                        rating: "4.5/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/fJq5Z1Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d3606622-Reviews-Valle_delle_Ferriere-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "torre-dello-ziro",
                        name: "Torre dello Ziro",
                        tag: "Meilleure vue",
                        tagline: "Histoire et panorama ultime",
                        gregorysTake: "Si vous voulez cette photo spécifique regardant directement vers le bas sur les toits d'Atrani et d'Amalfi, c'est ici. Calme, d'une beauté envoûtante et beaucoup moins fréquenté que le Sentier des Dieux.",
                        fullDesc: "Cette tour de guet se trouve sur la crête séparant Amalfi et Atrani. La légende raconte que la duchesse Giovanna d'Aragona a été emprisonnée ici pour sa liaison scandaleuse. Le sentier part de Pontone et est une agréable promenade de 30 à 40 minutes à travers des forêts de pins. Contrairement à d'autres sentiers, il offre beaucoup d'ombre. La vue depuis la plateforme à côté de la tour est sans doute la meilleure de toute la côte.",
                        photo: "https://image.pollinations.ai/prompt/Torre%20dello%20Ziro%20watchtower%20Amalfi%20Coast%20view%20Atrani",
                        rating: "4.5/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d4819264-Reviews-Torre_dello_Ziro-Pontone_Scala_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "path-of-gods",
                        name: "Sentier des Dieux (Sentiero degli Dei)",
                        tag: "Sentier de randonnée",
                        tagline: "La randonnée mondialement connue",
                        gregorysTake: "C'est touristique pour une raison : les vues sont inégalées. Mon conseil : commencez à Bomerano et descendez vers Nocelle pour garder les meilleures vues devant vous.",
                        fullDesc: "C'est le sentier de randonnée le plus célèbre de la côte amalfitaine. Il court le long des crêtes montagneuses bien au-dessus de la mer. Vous devrez prendre un bus jusqu'à Bomerano (Agerola) pour commencer. Le sentier se termine à Nocelle, un joli village au-dessus de Positano. De là, préparez-vous à 1 700 marches jusqu'à Positano (ou prenez le bus). Le paysage change à chaque virage, offrant des falaises spectaculaires et des vues infinies sur la mer.",
                        photo: "https://image.pollinations.ai/prompt/Path%20of%20the%20Gods%20Amalfi%20Coast%20hiking%20trail%20breathtaking%20view",
                        rating: "5.0/5",
                        reviewCount: "6,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/wsz6fGJJMjy",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187782-d596338-Reviews-Sentiero_degli_Dei-Positano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lemon-path",
                        name: "Le Sentier des Citrons (Sentiero dei Limoni)",
                        tag: "Sentier de randonnée",
                        tagline: "Une promenade parfumée embrassée par le soleil",
                        gregorysTake: "Une alternative plus facile aux randonnées en montagne. Ce chemin relie Maiori et Minori et vous emmène directement au cœur de la culture du citron de la région.",
                        fullDesc: "Situé dans l'un des endroits les plus fascinants de la côte, le \"Sentier des Citrons\" serpente à travers des jardins en terrasses. C'est une promenade facile à modérée (environ 1 heure) qui offre une vue imprenable sur la mer et les villes en contrebas. En saison, vous pourrez voir des agriculteurs portant de lourds paniers de citrons \"Sfusato Amalfitano\" sur leur dos. Arrêtez-vous pour une limonade fraîche en chemin !",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20lemon%20groves%20path%20yellow%20lemons%20sea%20background",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/pEuEERdx7SPheoSw8",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g580202-d12361093-Reviews-Sentiero_dei_Limoni-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "food",
                category: "Où manger (Atrani et Amalfi)",
                items: [
                    {
                        id: "le-palme",
                        name: "Le Palme (Atrani)",
                        tag: "Restaurant familial",
                        tagline: "Hospitalité authentique et fruits de mer",
                        gregorysTake: "Dirigé par les frères Armando et Salvatore depuis 1990, cet endroit est comme à la maison. C'est mon premier choix pour un repas fiable et délicieux où le service est aussi bon que la nourriture.",
                        fullDesc: "Le Palme est une institution à Atrani. Alors que de nombreux restaurants côtiers luttent pour la cohérence, Le Palme excelle. Ne manquez pas leurs pâtes signature au pesto de pistache ou les paccheri au sébaste et aux noix. Les fruits de mer grillés sont toujours frais. L'ambiance est animée et familiale ; pendant les vacances, vous pourriez même voir les enfants des frères aider. Ils offrent également d'excellentes options sans gluten.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20restaurant%20terrace%20Atrani%20Le%20Palme%20dining",
                        rating: "4.5/5",
                        reviewCount: "1,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/1usaXJbxcNJyosFdA",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1473698-Reviews-Le_Palme_Ristorante_Pizzeria-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "a-paranza",
                        name: "A'Paranza (Atrani)",
                        tag: "Sélection Michelin",
                        tagline: "Excellence raffinée des fruits de mer",
                        gregorysTake: "Un joyau sélectionné par Michelin qui reste humble. Si vous êtes un fin gourmet ou un Instagrammeur à la recherche du risotto parfait, c'est votre endroit.",
                        fullDesc: "Inclus dans le Guide Michelin, A'Paranza est dédié à la qualité. Malgré son apparence modeste, chaque détail est soigné, des couverts aux citrons locaux utilisés dans la sauce. Leur Risotto con crema di scampi signature est légendaire. Situé à seulement 200 mètres de l'eau, ils ne servent que la pêche la plus fraîche. La carte des vins est vaste et le personnel est expert en accords.",
                        photo: "https://image.pollinations.ai/prompt/Gourmet%20seafood%20dish%20Amalfi%20Coast%20Michelin%20style",
                        rating: "4.5/5",
                        reviewCount: "600+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ZJcWN2TiNHCk3E7G6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034462-Reviews-A_Paranza-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "da-ciccio",
                        name: "Da Ciccio Cielo Mare Terra (Vettica/Amalfi)",
                        tag: "Restaurant légendaire",
                        tagline: "Du jardin à la table avec vue",
                        gregorysTake: "Un lieu historique familial depuis 1931 avec une hospitalité incroyable. Utilisez leur service de navette gratuit depuis Amalfi : cela rend la logistique sans effort.",
                        fullDesc: "Situé à Vettica (juste au-dessus d'Amalfi), Da Ciccio est une institution. Ils cultivent leur propre potager, ce qui signifie que les produits dans votre assiette sont à kilomètre zéro. Ils servent peut-être le meilleur carpaccio de poisson de la côte. Mais le vrai point fort est la chaleur de la gestion familiale ; vous êtes traité comme un vieil ami.",
                        photo: "https://image.pollinations.ai/prompt/Da%20Ciccio%20Amalfi%20restaurant%20terrace%20sea%20view%20food",
                        rating: "4.5/5",
                        reviewCount: "1,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d1154564-Reviews-Da_Ciccio_Cielo_Mare_Terra-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "le-arcate",
                        name: "Le Arcate (Atrani)",
                        tag: "Dîner en bord de mer",
                        tagline: "Les meilleures places en ville",
                        gregorysTake: "L'emplacement, l'emplacement, l'emplacement. Si vous voulez manger juste au bord de l'eau à Atrani, réservez une table ici. Un favori des célébrités comme Edward Norton pour son intimité et sa vue.",
                        fullDesc: "Le Arcate est un endroit local apprécié pour ceux qui veulent les meilleures places à Atrani. Géré par une famille très unie, le menu est resté pratiquement inchangé depuis 1965, se concentrant sur la tradition simple et de haute qualité. Comme le dit le chef : \"Je sale et poivre juste le poisson. Je ne le rends pas meilleur, je le fais comme il devrait être.\" Remarque : À partir de 2024, ils se concentrent sur le service de restaurant et peuvent ne pas servir de pizza.",
                        photo: "https://image.pollinations.ai/prompt/Restaurant%20Le%20Arcate%20Atrani%20sea%20view%20tables",
                        rating: "4.0/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/xKN3G21T2BLzhMbG7",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034463-Reviews-Le_Arcate-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "apicella-bakery",
                        name: "Boulangerie Apicella (Amalfi)",
                        tag: "Street Food / Petit-déjeuner",
                        tagline: "La pizza du petit-déjeuner secrète des locaux",
                        gregorysTake: "Évitez le petit-déjeuner de l'hôtel. Faites comme les locaux et prenez une part de pizza rouge ici. C'est sans prétention, bon marché et absolument délicieux.",
                        fullDesc: "Cachée à seulement 70 mètres du Duomo d'Amalfi, cette boulangerie est facile à manquer mais impossible à oublier. C'est un endroit uniquement à emporter ouvert principalement le matin. C'est l'arrêt incontournable pour les écoliers et les travailleurs. Il n'y a pas de sièges, mais la saveur de leur pain et de leurs parts de pizza est la plus authentique que vous trouverez dans le centre-ville.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20bakery%20pizza%20focaccia%20Amalfi%20morning",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bWSK37czwKoPSdC36",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d4778107-Reviews-Panificio_Apicella-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "la-rua",
                        name: "La Rua Pizze E Delizie (Amalfi)",
                        tag: "Street Food",
                        tagline: "Arancini et collations au feu de bois",
                        gregorysTake: "L'endroit idéal pour une bouchée rapide tout en explorant les ruelles. Leurs arancini sont une perfection croustillante.",
                        fullDesc: "Situé au cœur d'Amalfi, La Rua offre plus que de la simple cuisine de rue ; ils servent des pizzas exceptionnelles au feu de bois préparées avec précision. L'arôme de la pâte fraîchement cuite vous attire. C'est aussi un excellent endroit pour goûter des collations frites traditionnelles comme les crocche (croquettes de pommes de terre) et les arancini. Un joyau culinaire caché pour un déjeuner décontracté.",
                        photo: "https://image.pollinations.ai/prompt/Arancini%20Italian%20street%20food%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "200+",
                        links: {
                            googleMaps: "https://goo.gl/maps/jwgUvMgD3NqxErhs5",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d23896504-Reviews-La_Rua_Pizze_E_Delizie-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "not_only",
                category: "Pas Seulement Amalfi",
                items: [
                    {
                        id: "ravello-infinity",
                        name: "Ravello - Terrasse de l'Infini",
                        tag: "Tourisme",
                        tagline: "La vue d'une vie",
                        gregorysTake: "Ravello est le balcon du monde. La Terrasse de l'Infini est sans doute l'endroit le plus photographié de la côte : vous aurez l'impression de flotter entre mer et ciel.",
                        fullDesc: "Ravello se trouve haut sur les falaises, à environ 20 minutes en bus d'Amalfi. Le joyau de la couronne est la Villa Cimbrone et sa \"Terrazza dell'Infinito\". Bordée de bustes en marbre et surplombant la mer Tyrrhénienne, elle offre un panorama qui a inspiré écrivains et cinéastes (vu dans Tenet et Wonder Woman). C'est une visite incontournable rien que pour les jardins.",
                        photo: "https://image.pollinations.ai/prompt/Villa%20Cimbrone%20Infinity%20Terrace%20Ravello%20statues%20sea%20view",
                        rating: "4.5/5",
                        reviewCount: "2,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d245903-Reviews-Villa_Cimbrone_Gardens-Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "sal-de-riso",
                        name: "Sal De Riso (Minori)",
                        tag: "Pâtisserie",
                        tagline: "Les meilleures pâtisseries du monde",
                        gregorysTake: "Sal De Riso n'est pas seulement un pâtissier ; c'est une célébrité. Vous ne pouvez pas quitter la côte sans goûter sa \"Delizia al Limone\" ou le gâteau \"Ricotta e Pere\".",
                        fullDesc: "Situé à Minori, c'est un temple de la douceur. Le maître pâtissier Sal De Riso a plus de 30 ans d'expérience. La boutique est animée et fréquentée, offrant une sélection massive de gâteaux, glaces et pâtisseries à base d'ingrédients locaux comme les noisettes de Giffoni et les citrons d'Amalfi. C'est aussi un excellent endroit pour un apéritif.",
                        photo: "https://image.pollinations.ai/prompt/Sal%20De%20Riso%20pastries%20lemon%20delight%20Minori",
                        rating: "4.0/5",
                        reviewCount: "4,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9nKrLusvyTwxasxV6",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g580202-d3184471-Reviews-Pasticceria_Sal_De_Riso-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "al-valico",
                        name: "Al Valico di Chiunzi (Tramonti)",
                        tag: "Dîner en montagne",
                        tagline: "Cuisine rustique avec vue sur le Vésuve",
                        gregorysTake: "Vous voulez voir où les locaux mangent le dimanche ? Montez dans les montagnes. L'air est plus frais et les pizzas font littéralement un mètre de long.",
                        fullDesc: "Situé à un col de montagne (Valico di Chiunzi) à environ 3 000 pieds au-dessus du niveau de la mer, cet endroit offre une vue panoramique qui s'étend au loin. Le restaurant est célèbre pour sa \"Pizza a Metro\" (pizza d'un mètre de long) et ses plats de viande copieux. C'est une halte populaire pour les randonneurs et ceux qui veulent échapper à l'humidité côtière.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20pizza%20meter%20long%20Tramonti%20wood%20oven",
                        rating: "4.0/5",
                        reviewCount: "300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/4AXTXoaMm7hJpbMr6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635618-d3184320-Reviews-Al_Valico_di_Chiunzi-Tramonti_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "marina-di-praia",
                        name: "Marina di Praia (Praiano)",
                        tag: "Plage / Détente",
                        tagline: "Soleil, falaises et spaghettis",
                        gregorysTake: "Souvent cité par les voyageurs expérimentés comme le meilleur endroit pour se \"détendre\". Pas de glamour, juste une petite plage coincée entre des falaises massives avec une excellente cuisine directement sur les pierres.",
                        fullDesc: "Contrairement à Positano, Marina di Praia a une âme détendue. La plage est située à l'embouchure d'une gorge à Praiano. Elle est accessible en voiture ou en bus. Le soleil part tôt ici à cause des falaises, c'est donc parfait pour une baignade matinale suivie d'un long déjeuner paresseux dans l'une des trattorias en bord de plage (comme Bar Mare Petit).",
                        photo: "https://image.pollinations.ai/prompt/Marina%20di%20Praia%20beach%20cliffs%20boats%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194868-d590479-Reviews-Marina_di_Praia_Beach-Praiano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lido-degli-artisti",
                        name: "Lido degli Artisti (Amalfi)",
                        tag: "Club de plage",
                        tagline: "Accessible uniquement par bateau ou escaliers",
                        gregorysTake: "Un endroit incroyablement beau qui semble exclusif. Prenez la navette en bateau depuis le port d'Amalfi pour l'expérience complète.",
                        fullDesc: "Réputée pour ses eaux cristallines et son atmosphère relaxante, cette plage est un joyau. Elle offre une vue imprenable sur la Méditerranée et est équipée de chaises longues et d'un restaurant. Elle porte le nom des artistes (comme le peintre Ivan Aivazovsky) qui se sont inspirés de ce paysage marin spécifique.",
                        photo: "https://image.pollinations.ai/prompt/Lido%20degli%20Artisti%20Amalfi%20beach%20umbrellas%20sea",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bomxs99HVDxbcdqD6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g187780-d4543923-Reviews-Lido_Degli_Artisti-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            }
        ],
        DE: [
            {
                id: "places",
                category: "Orte in Atrani & Amalfi",
                items: [
                    {
                        id: "square-atrani",
                        name: "Platz in Atrani (Piazzetta Umberto I)",
                        tag: "Fotospot / Atmosphäre",
                        tagline: "Das authentische Herz des Dorfes",
                        gregorysTake: "Folgen Sie den grünen Pfeilen durch das Dorf, um diesen filmreifen Platz zu entdecken. Es ist der perfekte Ort, um den Massen von Amalfi zu entfliehen und die wahre Seele der Küste einzufangen.",
                        fullDesc: "Überall in Atrani sehen Sie Schilder mit auffälligen grünen Pfeilen – eigentlich sind das Fluchtwegmarkierungen für Überschwemmungen, aber für uns sind es Wegweiser zur Schönheit. Wenn Sie ihnen folgen, gelangen Sie zur charmanten Piazzetta Umberto I, direkt vor der Kirche San Salvatore de' Birecto. Sie ist intim, von traditionellen Häusern umgeben und dient als Wohnzimmer für die Einheimischen. Trinken Sie hier einen Kaffee und beobachten Sie das Treiben; es ist ein charakteristischer Anblick, der die Essenz von Atrani verkörpert.",
                        photo: "https://amalfi.day/wp-content/uploads/2023/03/2-atrani-new-photos-aquarelle.webp",
                        rating: "4.5/5",
                        reviewCount: "250+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9QEVNhZqFHJsQDVRA",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g635619-d6849968-Reviews-Collegiate_Santa_Maria_Maddalena-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "castiglione-beach",
                        name: "Castiglione Strand (Lido di Ravello)",
                        tag: "Versteckter Strand",
                        tagline: "Ruhe zwischen den Klippen",
                        gregorysTake: "Ein malerisches Geheimnis zwischen hoch aufragenden Klippen, nur einen kurzen Spaziergang von Atrani entfernt. Es erfordert etwas Mühe, ihn zu erreichen, was die großen Massen fernhält.",
                        fullDesc: "Eingebettet zwischen zwei dramatischen Klippen liegt dieser malerische Ort, nur ein kurzes Stück hinter dem Platz von Atrani. Um diesen idyllischen Ort zu erreichen, folgen Sie der Hauptstraße und suchen Sie nach dem Eingang mit einer Treppe. Seien Sie vorbereitet: Es ist ein Abstieg von etwa 200 Stufen, um das Wasser zu erreichen, aber das kristallklare Meer und der Blick auf die Kirche der Magdalena von unten sind jeden Schritt wert.",
                        photo: "https://image.pollinations.ai/prompt/Castiglione%20Beach%20Amalfi%20Coast%20scenic%20view%20blue%20water",
                        rating: "4.0/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ErtYNHAQwcpwQQMn7",
                            tripAdvisor: "https://www.tripadvisor.it/Attraction_Review-g12079897-d10714192-Reviews-Lido_di_Ravello-Castiglione_Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "duomo-amalfi",
                        name: "Duomo di Sant’Andrea (Amalfi Kathedrale)",
                        tag: "Historisches Wahrzeichen",
                        tagline: "Die Ikone von Amalfi",
                        gregorysTake: "Sie können Amalfi nicht besuchen, ohne den Duomo zu sehen. Seine Treppe mit 62 Stufen ist legendär, aber die wahre Magie ist der friedliche Paradieskreuzgang im Inneren.",
                        fullDesc: "Der Duomo ist das architektonische Herz von Amalfi und stammt aus dem 9. Jahrhundert. Dieses majestätische Gebäude verfügt über eine dramatische Treppe, eine markante arabisch-normannische Fassade und massive Bronzetüren, die in Konstantinopel gegossen wurden. Im Inneren liegen die Reliquien des Heiligen Andreas, des Schutzpatrons. Der Komplex umfasst die Basilika des Kruzifixes und den Paradieskreuzgang. Tipp: Kommen Sie früh (gegen 9:00 Uhr), um die feierliche Schönheit zu erleben, bevor die Tagesausflügler ankommen.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Cathedral%20Duomo%20di%20Sant%20Andrea%20facade%20stairs",
                        rating: "4.5/5",
                        reviewCount: "4,300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d195006-Reviews-Duomo_di_Sant_Andrea-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "amalfi-elevator",
                        name: "Städtischer Aufzug von Amalfi",
                        tag: "Aussichtspunkt",
                        tagline: "Das beste Panorama ohne Wanderung",
                        gregorysTake: "Möchten Sie den besten Blick aus der Vogelperspektive auf Amalfi, ohne ins Schwitzen zu geraten? Überspringen Sie die Treppen und nehmen Sie diesen geheimen Tunnel zur Friedhofsebene.",
                        fullDesc: "Dieser Ort bietet zweifellos den besten Blick auf Amalfi von oben. Gehen Sie von Atrani in Richtung Amalfi. In der Nähe des Parkhauses \"Luna Rossa\" finden Sie einen Fußgängertunnel. Gehen Sie hindurch, biegen Sie am Ende rechts ab und finden Sie das Tor zu einem zweiten Tunnel, der zum öffentlichen Aufzug führt. Er bringt Sie auf die Ebene des monumentalen Friedhofs. Die Stille dort oben, kombiniert mit dem Blick auf den Hafen und die Kathedrale, ist atemberaubend.",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20Coast%20panoramic%20view%20from%20above%20sea%20cliffs",
                        rating: "4.0/5",
                        reviewCount: "20+",
                        links: {
                            googleMaps: "https://goo.gl/maps/XKX2UpeRBYQecQyj7",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d26860088-Reviews-Ascensore_per_il_Cimitero_Monumentale-Amalfi_Amalfi_Coast_Province_of_Salerno_C.html"
                        }
                    },
                    {
                        id: "secret-waterfall",
                        name: "Geheimer Wasserfall (Valle dei Mulini)",
                        tag: "Verstecktes Juwel",
                        tagline: "Antike Ruinen und kühles Wasser",
                        gregorysTake: "Ein wahrer versteckter Ort hinter den privaten Villen, wohin sich nur wenige Touristen wagen. Es fühlt sich an, als würde man direkt in Amalfi in eine Szene aus dem 'Dschungelbuch' treten.",
                        fullDesc: "Gehen Sie die Hauptstraße in Amalfi (Via Capo di Piazza) bis ganz zum Ende hinauf. Sie sehen eine private Villa und ein geschlossenes Tor. Biegen Sie links ab und nehmen Sie die Stufen nach oben. Gegenüber der Villa, am Ende des Pfades, entdecken Sie alte zerstörte Wassermühlen, eine große Höhle und einen schönen Wasserfall, der hinunterstürzt. Es ist kühl, grün und völlig still im Vergleich zur geschäftigen Piazza.",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20waterfall%20Amalfi%20nature%20lush%20green",
                        rating: null,
                        reviewCount: null,
                        links: {
                            googleMaps: "https://goo.gl/maps/oNNm5mfiJ8bySLns9",
                            tripAdvisor: null
                        }
                    }
                ]
            },
            {
                id: "hiking",
                category: "Wandern & Natur",
                items: [
                    {
                        id: "valle-delle-ferriere",
                        name: "Valle delle Ferriere",
                        tag: "Naturschutzgebiet",
                        tagline: "Wasserfälle und antike Geschichte",
                        gregorysTake: "Entfliehen Sie der Hitze in ein üppiges, jurassic-ähnliches Reservat. Diese leichte Wanderung führt Sie durch Zitronenhaine und vorbei an Industrieruinen zu magischen Wasserfällen.",
                        fullDesc: "Valle delle Ferriere ist ein geschütztes Naturschutzgebiet, das in den Bergen zwischen Scala und Amalfi versteckt liegt. Der Name stammt von den mittelalterlichen Eisenhütten, die hier einst betrieben wurden. Heute ist es ein Zufluchtsort für seltene Farne und rauschendes Wasser. Die Wanderung ist machbar (2-3 Stunden) und bietet im Sommer einen seltenen schattigen Rückzugsort. Sie werden die Ruinen der alten Papierfabriken sehen, die Amalfi berühmt gemacht haben. Tragen Sie rutschfeste Schuhe!",
                        photo: "https://image.pollinations.ai/prompt/Valle%20delle%20Ferriere%20nature%20reserve%20Amalfi%20waterfall%20ferns",
                        rating: "4.5/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/fJq5Z1Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187780-d3606622-Reviews-Valle_delle_Ferriere-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "torre-dello-ziro",
                        name: "Torre dello Ziro",
                        tag: "Beste Aussicht",
                        tagline: "Geschichte und das ultimative Panorama",
                        gregorysTake: "Wenn Sie dieses eine spezielle Foto wollen, bei dem Sie direkt auf die Dächer von Atrani und Amalfi hinunterschauen, dann ist dies der richtige Ort. Ruhig, unheimlich schön und viel weniger überlaufen als der Pfad der Götter.",
                        fullDesc: "Dieser Wachturm steht auf dem Grat, der Amalfi und Atrani trennt. Die Legende besagt, dass die Herzogin Giovanna d'Aragona hier wegen ihrer skandalösen Affäre eingesperrt war. Der Weg beginnt in Pontone und ist ein angenehmer 30-40-minütiger Spaziergang durch Pinienwälder. Im Gegensatz zu anderen Wegen bietet er viel Schatten. Die Aussicht von der Plattform neben dem Turm ist wohl die beste an der gesamten Küste.",
                        photo: "https://image.pollinations.ai/prompt/Torre%20dello%20Ziro%20watchtower%20Amalfi%20Coast%20view%20Atrani",
                        rating: "4.5/5",
                        reviewCount: "150+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d4819264-Reviews-Torre_dello_Ziro-Pontone_Scala_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "path-of-gods",
                        name: "Pfad der Götter (Sentiero degli Dei)",
                        tag: "Wanderweg",
                        tagline: "Die weltberühmte Wanderung",
                        gregorysTake: "Es ist aus gutem Grund touristisch – die Aussicht ist unübertroffen. Mein Rat: Starten Sie in Bomerano und gehen Sie hinunter nach Nocelle, um die besten Aussichten vor sich zu haben.",
                        fullDesc: "Dies ist der berühmteste Wanderweg an der Amalfiküste. Er verläuft entlang der Gebirgskämme hoch über dem Meer. Sie müssen einen Bus nach Bomerano (Agerola) nehmen, um zu starten. Der Weg endet in Nocelle, einem niedlichen Dorf oberhalb von Positano. Von dort aus müssen Sie sich auf 1.700 Stufen hinunter nach Positano einstellen (oder den Bus nehmen). Die Landschaft ändert sich hinter jeder Kurve und bietet dramatische Klippen und endlose Meerblicke.",
                        photo: "https://image.pollinations.ai/prompt/Path%20of%20the%20Gods%20Amalfi%20Coast%20hiking%20trail%20breathtaking%20view",
                        rating: "5.0/5",
                        reviewCount: "6,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/wsz6fGJJMjy",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g187782-d596338-Reviews-Sentiero_degli_Dei-Positano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lemon-path",
                        name: "Der Zitronenweg (Sentiero dei Limoni)",
                        tag: "Wanderweg",
                        tagline: "Ein duftender Spaziergang, von der Sonne geküsst",
                        gregorysTake: "Eine einfachere Alternative zu den Bergwanderungen. Dieser Weg verbindet Maiori und Minori und führt Sie direkt durch das Herz der Zitronenanbaukultur der Region.",
                        fullDesc: "An einem der faszinierendsten Orte der Küste gelegen, schlängelt sich der \"Weg der Zitronen\" durch terrassierte Gärten. Es ist ein leichter bis mittelschwerer Spaziergang (ca. 1 Stunde), der atemberaubende Ausblicke auf das Meer und die Städte unten bietet. In der Saison sehen Sie vielleicht Bauern, die schwere Körbe mit \"Sfusato Amalfitano\"-Zitronen auf dem Rücken tragen. Halten Sie unterwegs für eine frische Limonade an!",
                        photo: "https://image.pollinations.ai/prompt/Amalfi%20lemon%20groves%20path%20yellow%20lemons%20sea%20background",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/pEuEERdx7SPheoSw8",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g580202-d12361093-Reviews-Sentiero_dei_Limoni-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "food",
                category: "Essen & Trinken (Atrani & Amalfi)",
                items: [
                    {
                        id: "le-palme",
                        name: "Le Palme (Atrani)",
                        tag: "Familienrestaurant",
                        tagline: "Authentische Gastfreundschaft & Meeresfrüchte",
                        gregorysTake: "Geführt von den Brüdern Armando und Salvatore seit 1990, fühlt sich dieser Ort wie zu Hause an. Es ist meine erste Wahl für ein zuverlässiges, köstliches Essen, bei dem der Service genauso gut ist wie das Essen.",
                        fullDesc: "Le Palme ist eine Institution in Atrani. Während viele Küstenrestaurants mit der Beständigkeit kämpfen, zeichnet sich Le Palme aus. Verpassen Sie nicht ihre charakteristische Pasta mit Pistazienpesto oder die Paccheri mit Rotbarsch und Walnüssen. Die gegrillten Meeresfrüchte sind immer frisch. Die Atmosphäre ist lebhaft und familienorientiert – an Feiertagen sehen Sie vielleicht sogar die Kinder der Brüder mithelfen. Sie bieten auch ausgezeichnete glutenfreie Optionen an.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20restaurant%20terrace%20Atrani%20Le%20Palme%20dining",
                        rating: "4.5/5",
                        reviewCount: "1,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/1usaXJbxcNJyosFdA",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1473698-Reviews-Le_Palme_Ristorante_Pizzeria-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "a-paranza",
                        name: "A'Paranza (Atrani)",
                        tag: "Michelin-Auswahl",
                        tagline: "Raffinierte Meeresfrüchte-Exzellenz",
                        gregorysTake: "Ein von Michelin ausgewähltes Juwel, das bescheiden bleibt. Wenn Sie ein Feinschmecker oder ein Instagrammer auf der Suche nach dem perfekten Risotto sind, ist dies Ihr Ort.",
                        fullDesc: "Im Michelin-Führer enthalten, widmet sich A'Paranza der Qualität. Trotz seines unscheinbaren Aussehens ist jedes Detail kuratiert, vom Besteck bis zu den lokalen Zitronen, die in der Sauce verwendet werden. Ihr charakteristisches Risotto con crema di scampi ist legendär. Nur 200 Meter vom Wasser entfernt gelegen, servieren sie nur den frischesten Fang. Die Weinkarte ist umfangreich und das Personal ist Experte für Weinbegleitung.",
                        photo: "https://image.pollinations.ai/prompt/Gourmet%20seafood%20dish%20Amalfi%20Coast%20Michelin%20style",
                        rating: "4.5/5",
                        reviewCount: "600+",
                        links: {
                            googleMaps: "https://goo.gl/maps/ZJcWN2TiNHCk3E7G6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034462-Reviews-A_Paranza-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "da-ciccio",
                        name: "Da Ciccio Cielo Mare Terra (Vettica/Amalfi)",
                        tag: "Legendäres Restaurant",
                        tagline: "Vom Garten auf den Tisch mit Aussicht",
                        gregorysTake: "Ein historischer Familienbetrieb seit 1931 mit unglaublicher Gastfreundschaft. Nutzen Sie ihren kostenlosen Shuttleservice von Amalfi – das macht die Logistik mühelos.",
                        fullDesc: "In Vettica (direkt über Amalfi) gelegen, ist Da Ciccio eine Institution. Sie bewirtschaften ihren eigenen Gemüsegarten, was bedeutet, dass die Produkte auf Ihrem Teller null Kilometer zurückgelegt haben. Sie servieren vielleicht das beste Fisch-Carpaccio an der Küste. Aber das wahre Highlight ist die Wärme der familiären Führung; Sie werden wie ein alter Freund behandelt.",
                        photo: "https://image.pollinations.ai/prompt/Da%20Ciccio%20Amalfi%20restaurant%20terrace%20sea%20view%20food",
                        rating: "4.5/5",
                        reviewCount: "1,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d1154564-Reviews-Da_Ciccio_Cielo_Mare_Terra-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "le-arcate",
                        name: "Le Arcate (Atrani)",
                        tag: "Essen am Meer",
                        tagline: "Die besten Plätze der Stadt",
                        gregorysTake: "Lage, Lage, Lage. Wenn Sie direkt am Wasser in Atrani essen möchten, reservieren Sie hier einen Tisch. Ein Favorit von Prominenten wie Edward Norton wegen seiner Privatsphäre und Aussicht.",
                        fullDesc: "Le Arcate ist ein beliebter lokaler Ort für diejenigen, die die besten Plätze in Atrani wollen. Von einer eng verbundenen Familie geführt, ist die Speisekarte seit 1965 weitgehend unverändert geblieben und konzentriert sich auf einfache, hochwertige Tradition. Wie der Koch sagt: \"Ich salze und pfeffere den Fisch nur. Ich mache ihn nicht besser, ich mache ihn so, wie er sein sollte.\" Hinweis: Ab 2024 konzentrieren sie sich auf den Restaurantservice und servieren möglicherweise keine Pizza.",
                        photo: "https://image.pollinations.ai/prompt/Restaurant%20Le%20Arcate%20Atrani%20sea%20view%20tables",
                        rating: "4.0/5",
                        reviewCount: "700+",
                        links: {
                            googleMaps: "https://goo.gl/maps/xKN3G21T2BLzhMbG7",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635619-d1034463-Reviews-Le_Arcate-Atrani_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "apicella-bakery",
                        name: "Bäckerei Apicella (Amalfi)",
                        tag: "Street Food / Frühstück",
                        tagline: "Die geheime Frühstückspizza der Einheimischen",
                        gregorysTake: "Überspringen Sie das Hotelfrühstück. Machen Sie es wie die Einheimischen und holen Sie sich hier ein Stück rote Pizza. Es ist unscheinbar, billig und absolut köstlich.",
                        fullDesc: "Versteckt nur 70 Meter vom Dom von Amalfi entfernt, ist diese Bäckerei leicht zu übersehen, aber unmöglich zu vergessen. Es ist ein Ort nur zum Mitnehmen, der hauptsächlich morgens geöffnet ist. Es ist der Anlaufpunkt für Schüler und Arbeiter. Es gibt keine Sitzplätze, aber der Geschmack ihres Brotes und ihrer Pizzastücke ist der authentischste, den Sie im Stadtzentrum finden werden.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20bakery%20pizza%20focaccia%20Amalfi%20morning",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bWSK37czwKoPSdC36",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d4778107-Reviews-Panificio_Apicella-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "la-rua",
                        name: "La Rua Pizze E Delizie (Amalfi)",
                        tag: "Street Food",
                        tagline: "Arancini & Snacks aus dem Holzofen",
                        gregorysTake: "Der perfekte Ort für einen schnellen Happen, während Sie die Gassen erkunden. Ihre Arancini sind knusprige Perfektion.",
                        fullDesc: "Im Herzen von Amalfi gelegen, bietet La Rua mehr als nur Street Food; sie servieren außergewöhnliche Pizzen aus dem Holzofen, die mit Präzision zubereitet werden. Der Duft von frisch gebackenem Teig zieht Sie an. Es ist auch ein großartiger Ort, um traditionelle frittierte Snacks wie Crocche (Kartoffelkroketten) und Arancini zu probieren. Ein verstecktes kulinarisches Juwel für ein zwangloses Mittagessen.",
                        photo: "https://image.pollinations.ai/prompt/Arancini%20Italian%20street%20food%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "200+",
                        links: {
                            googleMaps: "https://goo.gl/maps/jwgUvMgD3NqxErhs5",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g187780-d23896504-Reviews-La_Rua_Pizze_E_Delizie-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            },
            {
                id: "not_only",
                category: "Nicht nur Amalfi",
                items: [
                    {
                        id: "ravello-infinity",
                        name: "Ravello - Terrasse der Unendlichkeit",
                        tag: "Sehenswürdigkeit",
                        tagline: "Der Blick Ihres Lebens",
                        gregorysTake: "Ravello ist der Balkon der Welt. Die Terrasse der Unendlichkeit ist wohl der meistfotografierte Ort an der Küste – Sie werden das Gefühl haben, zwischen Meer und Himmel zu schweben.",
                        fullDesc: "Ravello liegt hoch auf den Klippen, etwa 20 Busminuten von Amalfi entfernt. Das Kronjuwel ist die Villa Cimbrone und ihre \"Terrazza dell'Infinito\". Gesäumt von Marmorbüsten und mit Blick auf das Tyrrhenische Meer bietet sie ein Panorama, das Schriftsteller und Filmemacher inspiriert hat (zu sehen in Tenet und Wonder Woman). Es ist ein Muss, allein schon wegen der Gärten.",
                        photo: "https://image.pollinations.ai/prompt/Villa%20Cimbrone%20Infinity%20Terrace%20Ravello%20statues%20sea%20view",
                        rating: "4.5/5",
                        reviewCount: "2,500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194883-d245903-Reviews-Villa_Cimbrone_Gardens-Ravello_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "sal-de-riso",
                        name: "Sal De Riso (Minori)",
                        tag: "Konditorei",
                        tagline: "Das beste Gebäck der Welt",
                        gregorysTake: "Sal De Riso ist nicht nur ein Konditor; er ist eine Berühmtheit. Sie können die Küste nicht verlassen, ohne seine \"Delizia al Limone\" oder den \"Ricotta e Pere\"-Kuchen probiert zu haben.",
                        fullDesc: "In Minori gelegen, ist dies ein Tempel der Süße. Meisterkonditor Sal De Riso hat über 30 Jahre Erfahrung. Der Laden ist lebhaft und gut besucht und bietet eine riesige Auswahl an Kuchen, Gelato und Gebäck, die mit lokalen Zutaten wie Giffoni-Haselnüssen und Amalfi-Zitronen hergestellt werden. Es ist auch ein großartiger Ort für einen Aperitif.",
                        photo: "https://image.pollinations.ai/prompt/Sal%20De%20Riso%20pastries%20lemon%20delight%20Minori",
                        rating: "4.0/5",
                        reviewCount: "4,000+",
                        links: {
                            googleMaps: "https://goo.gl/maps/9nKrLusvyTwxasxV6",
                            tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g580202-d3184471-Reviews-Pasticceria_Sal_De_Riso-Minori_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "al-valico",
                        name: "Al Valico di Chiunzi (Tramonti)",
                        tag: "Essen in den Bergen",
                        tagline: "Rustikales Essen mit Blick auf den Vesuv",
                        gregorysTake: "Wollen Sie sehen, wo die Einheimischen sonntags essen? Fahren Sie in die Berge. Die Luft ist kühler und die Pizzen sind buchstäblich einen Meter lang.",
                        fullDesc: "An einem Gebirgspass (Valico di Chiunzi) etwa 3.000 Fuß über dem Meeresspiegel gelegen, bietet dieser Ort einen Panoramablick, der weit in die Ferne reicht. Das Restaurant ist berühmt für seine \"Pizza a Metro\" (meterlange Pizza) und herzhafte Fleischgerichte. Es ist ein beliebter Stopp für Wanderer und diejenigen, die der Küstenfeuchtigkeit entfliehen wollen.",
                        photo: "https://image.pollinations.ai/prompt/Italian%20pizza%20meter%20long%20Tramonti%20wood%20oven",
                        rating: "4.0/5",
                        reviewCount: "300+",
                        links: {
                            googleMaps: "https://goo.gl/maps/4AXTXoaMm7hJpbMr6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g635618-d3184320-Reviews-Al_Valico_di_Chiunzi-Tramonti_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "marina-di-praia",
                        name: "Marina di Praia (Praiano)",
                        tag: "Strand / Entspannung",
                        tagline: "Sonne, Klippen und Spaghetti",
                        gregorysTake: "Oft von erfahrenen Reisenden als der beste Ort zum \"Chillen\" genannt. Kein Glamour, nur ein winziger Strand, eingekeilt zwischen massiven Klippen, mit großartigem Essen direkt auf den Steinen.",
                        fullDesc: "Im Gegensatz zu Positano hat Marina di Praia eine entspannte Seele. Der Strand liegt an der Mündung einer Schlucht in Praiano. Er ist mit dem Auto oder Bus erreichbar. Die Sonne verschwindet hier aufgrund der Klippen früh, daher ist es perfekt für ein morgendliches Bad, gefolgt von einem langen, faulen Mittagessen in einer der Trattorien am Strand (wie Bar Mare Petit).",
                        photo: "https://image.pollinations.ai/prompt/Marina%20di%20Praia%20beach%20cliffs%20boats%20Amalfi",
                        rating: "4.5/5",
                        reviewCount: "500+",
                        links: {
                            googleMaps: "https://goo.gl/maps/8Xj9X6Q1X1Q2",
                            tripAdvisor: "https://www.tripadvisor.com/Attraction_Review-g194868-d590479-Reviews-Marina_di_Praia_Beach-Praiano_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    },
                    {
                        id: "lido-degli-artisti",
                        name: "Lido degli Artisti (Amalfi)",
                        tag: "Strandclub",
                        tagline: "Nur mit dem Boot oder über Treppen erreichbar",
                        gregorysTake: "Ein atemberaubend schöner Ort, der sich exklusiv anfühlt. Nehmen Sie das Bootsshuttle vom Hafen von Amalfi für das volle Erlebnis.",
                        fullDesc: "Bekannt für sein kristallklares Wasser und seine entspannende Atmosphäre, ist dieser Strand ein Juwel. Er bietet einen atemberaubenden Blick auf das Mittelmeer und ist mit Sonnenliegen und einem Restaurant ausgestattet. Er ist nach den Künstlern (wie dem Maler Iwan Aiwasowski) benannt, die sich von dieser speziellen Meereslandschaft inspirieren ließen.",
                        photo: "https://image.pollinations.ai/prompt/Lido%20degli%20Artisti%20Amalfi%20beach%20umbrellas%20sea",
                        rating: "4.5/5",
                        reviewCount: "100+",
                        links: {
                            googleMaps: "https://goo.gl/maps/bomxs99HVDxbcdqD6",
                            tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g187780-d4543923-Reviews-Lido_Degli_Artisti-Amalfi_Amalfi_Coast_Province_of_Salerno_Campania.html"
                        }
                    }
                ]
            }
        ]
    };

    return data[lang] || data['EN'];
};
