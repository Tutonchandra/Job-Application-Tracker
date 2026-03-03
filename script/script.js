let currentTab = "all";
const tabActive = ["bg-[#002C5C]", "border-navy", "text-white"]
const tabInactive = ["bg-transparent", "text-black-700", "border-black-200"]

const allContainer = document.getElementById("all-container")
const interviewContainer = document.getElementById("interview-container")
const rejectedContainer = document.getElementById("reject-container")
const emptyStat = document.getElementById("empty-stats")



function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t)
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive)
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive)
        }

    }

    const pages = [allContainer, interviewContainer, rejectedContainer]
    console.log(pages)

    for (const section of pages) {
        section.classList.add("hidden");
    }
    emptyStat.classList.add("hidden")

    if (tab === "all") {
        allContainer.classList.remove("hidden");
        if (allContainer.children.length < 1) {
            emptyStat.classList.remove("hidden")
        }


    } else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
        if (interviewContainer.children.length < 1) {
            emptyStat.classList.remove("hidden")
        }

    } else {
        rejectedContainer.classList.remove("hidden")
        if (rejectedContainer.children.length < 1) {
            emptyStat.classList.remove("hidden")
        }
    }
    updateStat()
}
const totalStat = document.getElementById('stat-total');
const interviewStat = document.getElementById('stat-interview');
const rejectStat = document.getElementById('stat-reject');
const availableJobs = document.getElementById("available");

totalStat.innerText = allContainer.children.length;
interviewStat.innerText = interviewContainer.children.length;
rejectStat.innerText = rejectedContainer.children.length;
availableJobs.innerText = availableJobs.children.length;

switchTab(currentTab)

// event Deligation diye kora jabe
document.getElementById("jobs-container").addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");

    if (clickedElement.classList.contains("interview")) {

        status.innerText = "Interviewed";
        status.classList.remove("text-gray-500", "border-gray-300", "bg-gray-200");
        status.classList.add("bg-transparent", "border-teal-400", "text-teal-400");
        interviewContainer.appendChild(card);

    }
    else if (clickedElement.classList.contains("rejected")) {

        status.innerText = "Rejected";
        status.classList.remove("text-gray-500", "border-gray-300", "bg-gray-200", "bg-transparent", "border-teal-400", "text-teal-400");
        status.classList.add("bg-transparent", "border-red-400", "text-red-400");
        rejectedContainer.appendChild(card);

    }
    if (clickedElement.classList.contains("delete")) {
        parent.removeChild(card)
    }
    updateStat()
})

function updateStat() {
    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length,
    };
    totalStat.innerText = counts.all;
    interviewStat.innerText = counts.interview;
    rejectStat.innerText = counts.rejected;
    availableJobs.innerText = counts[currentTab];

    if (counts[currentTab] < 1) {
        emptyStat.classList.remove("hidden");
    } else {
        emptyStat.classList.add("hidden");
    }
}
updateStat()

