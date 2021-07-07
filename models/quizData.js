const quizes = [
        {
            name: "Beginner",
            id: 123,
            questions: [
                {
                    question: "What does the acronym NFT stand for?",
                    imgUrl: "https://c.files.bbci.co.uk/31F0/production/_117548721_nfts2.jpg",
                    selected: null,
                    options: [
                        {
                            option: "New Fungible Token",
                            id: 1,
                            isRight: false
                        },
                        {
                            option: "Non Fungible Token",
                            id: 2,
                            isRight: true
                        },
                        {
                            option: "Non Fungible Ticket",
                            id: 3,
                            isRight: false
                        },
                        {
                            option: "New Financial Token",
                            id: 4,
                            isRight: false
                        },
                    ]
                },
                {
                    question: "What's the highest an NFT has ever been sold for?",
                    imgUrl: "https://static01.nyt.com/images/2021/03/12/arts/11nft-auction1/11nft-auction1-facebookJumbo.jpg",
                    selected: null,
                    options: [
                        {
                            option: "$240 million",
                            id: 1,
                            isRight: false
                        },
                        {
                            option: "$1.3 billion",
                            id: 2,
                            isRight: false
                        },
                        {
                            option: "$69 million",
                            id: 3,
                            isRight: true
                        },
                        {
                            option: "$600,000",
                            id: 4,
                            isRight: false
                        },


                    ]
                },
                {
                    question: "Which famous sport entered the NFT space recently(Hint: They sold a NFT worth $200,000)",
                    imgUrl: "https://www.nftculture.com/wp-content/uploads/2021/04/Walter-Looss-JR-NFT-MakersPlace.png",
                    selected: null,
                    options: [
                        {
                            option: "NBA",
                            id: 1,
                            isRight: true
                        },
                        {
                            option: "FIFA",
                            id: 2,
                            isRight: false
                        },
                        {
                            option: "IPL",
                            id: 3,
                            isRight: false
                        },
                        {
                            option: "Olympics",
                            id: 4,
                            isRight: false
                        },
                    ]
                },
                {
                    question: "CEO of one of the most famous Social Media recently sold his first post as an NFT for $2.9 million! Guess Who?",
                    imgUrl: "https://media.vanityfair.com/photos/5a7cdda147ef634077a69cf1/5:3/w_1440,h_864,c_limit/Spiegel-and-Dorsey-Take-a-Bite-Out-of-Zuckerberg.jpg",
                    selected: null,
                    options: [
                        {
                            option: "Mark Zukerberg",
                            id: 1,
                            isRight: false
                        },
                        {
                            option: "Evan Spiegel",
                            id: 2,
                            isRight: false
                        },
                        {
                            option: "Jack Dorsey",
                            id: 3,
                            isRight: true
                        },
                        {
                            option: "Steve Huffman",
                            id: 4,
                            isRight: false
                        },
                    ]
                }
            ]
        },
        {
            name: "Intermidiate",
            id: 124,
            questions: [
                {
                    question: "Which of the following is not a form that NFTs can take?",
                    imgUrl: "https://c.files.bbci.co.uk/31F0/production/_117548721_nfts2.jpg",
                    selected: null,
                    options: [
                        {
                            option: "Image",
                            id: 1,
                            isRight: false
                        },
                        {
                            option: "Bitcoin",
                            id: 2,
                            isRight: true
                        },
                        {
                            option: "Video",
                            id: 3,
                            isRight: false
                        },
                        {
                            option: "Song",
                            id: 4,
                            isRight: false
                        },
                    ]
                },
                {
                    question: "Which person earned the most money selling an NFT?",
                    imgUrl: "https://gdb.voanews.com/01434839-189F-456A-8E1F-8D2037B72253_cx0_cy5_cw100_w650_r1_s.jpg",
                    selected: null,
                    options: [
                        {
                            option: "Kevin Roose",
                            id: 1,
                            isRight: false
                        },
                        {
                            option: "LeBron James",
                            id: 2,
                            isRight: false
                        },
                        {
                            option: "Mike Winkelmann",
                            id: 3,
                            isRight: true
                        },
                        {
                            option: "Leonardo Da'vinci",
                            id: 4,
                            isRight: false
                        },
                    ]
                },
                {
                    question: "What is the definition of a token?",
                    imgUrl: "https://assets.entrepreneur.com/content/3x2/2000/1617647441-GettyImages-1307372676.jpg",
                    selected: null,
                    options: [
                        {
                            option: "It is a cryptocurrency linked to a work of art",
                            id: 1,
                            isRight: false
                        },
                        {
                            option: "It is another word for cryptocurrency",
                            id: 2,
                            isRight: false
                        },
                        {
                            option: "It is a cryptocurrency that is tradeable for cash",
                            id: 3,
                            isRight: false
                        },
                        {
                            option: "A cryptocurrency created on top of someone else's ledger",
                            id: 4,
                            isRight: true
                        },
                    ]
                },
                {
                    question: "Which of the following is not a known risk of NFTs?",
                    imgUrl: "https://i.insider.com/604bc31910c8760018b92ff9?width=1136&format=jpeg",
                    selected: null,
                    options: [
                        {
                            option: "Carbon emissions",
                            id: 1,
                            isRight: true
                        },
                        {
                            option: "Money laundering",
                            id: 2,
                            isRight: false
                        },
                        {
                            option: "Scamming",
                            id: 3,
                            isRight: false
                        },
                        {
                            option: "Collusion",
                            id: 4,
                            isRight: false
                        },
                    ]
                }
            ]
        },
        {
            name: "Advance",
            id: 125,
            questions: [
                {
                    question: "What is one of the main reasons why artists like using NFTs?",
                    imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                    selected: null,
                    options: [
                        {
                            option: "NFTs provide artists more chances to sell works worldwide.",
                            id: 1,
                            isRight: false
                        },
                        {
                            option: "Artists can create digital art pieces at a much faster rate.",
                            id: 2,
                            isRight: false
                        },
                        {
                            option: "NFTs make it impossible for people to copy digital artwork.",
                            id: 3,
                            isRight: false
                        },
                        {
                            option: "Artists can claim complete ownership over digital works.",
                            id: 4,
                            isRight: true
                        },
                    ]
                },
                {
                    question: "What does the ownership of an NFT not necessarily grant?",
                    imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beeple-christies-1616625978.jpg",
                    selected: null,
                    options: [
                        {
                            option: "The right to sell the tokens",
                            id: 1,
                            isRight: false
                        },
                        {
                            option: "The right to monetise the value of the asset",
                            id: 2,
                            isRight: false
                        },
                        {
                            option: "Ownership of the physical asset",
                            id: 3,
                            isRight: true
                        },
                        {
                            option: "The right to be recorded as the owner of the token",
                            id: 4,
                            isRight: false
                        },

                    ]
                },
                {
                    question: "Which of the following reasons describes why NFTs are useful in the art world?",
                    imgUrl: "https://foreignpolicy.com/wp-content/uploads/2021/06/what-are-nfts-GettyImages-1321710605.jpg",
                    selected: null,
                    options: [
                        {
                            option: "Because they allow for proof of provenance of artworks",
                            id: 1,
                            isRight: true
                        },
                        {
                            option: "Because they allow freer trading of artworks",
                            id: 2,
                            isRight: false
                        },
                        {
                            option: "Because they allow for a certain level of secrecy in ownership",
                            id: 3,
                            isRight: false
                        },
                        {
                            option: "Because they obscure provenance of artworks",
                            id: 4,
                            isRight: false
                        },
                    ]
                },
                {
                    question: "Which of the following is not a known benefit of an NFT?",
                    imgUrl: "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTgwMjA3NTU4OTMyMzA5MzM2/imageedit_2_6576092928.png",
                    selected: null,
                    options: [
                        {
                            option: "They allow a securitisation-like process for assets",
                            id: 1,
                            isRight: false
                        },
                        {
                            option: "They allow the owner the right to reproduce the asset",
                            id: 2,
                            isRight: true
                        },
                        {
                            option: "They allow the tracing of ownership and custody of an asset over time",
                            id: 3,
                            isRight: false
                        },
                        {
                            option: "They allow owners to better control duplication of work by others",
                            id: 4,
                            isRight: false
                        },
                    ]
                }
            ]
        }
    ]
module.exports = { quizes}